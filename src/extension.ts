import * as vscode from 'vscode'

interface NotificationArgs {
  message: string
  type?: 'info' | 'warning' | 'error'
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'vscode-notify.sendNotification',
    (args: NotificationArgs) => {
      if (!args || !args.message) {
        vscode.window.showErrorMessage(
          'VS Code Notify: message argument is required',
        )
        return
      }

      const message = args.message
      const type = args.type || 'info'

      switch (type) {
        case 'error':
          vscode.window.showErrorMessage(message)
          break
        case 'warning':
          vscode.window.showWarningMessage(message)
          break
        case 'info':
        default:
          vscode.window.showInformationMessage(message)
          break
      }
    },
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
