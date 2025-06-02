# VS Code Notify

A simple VS Code extension that allows you to send custom notifications from
keyboard shortcuts.

## Features

- Send custom notification messages
- Support for different notification types (info, warning, error)
- Configurable via keybindings with custom arguments

## Usage

### Command Palette

1. Open Command Palette (`Cmd+Shift+P` on macOS, `Ctrl+Shift+P` on Windows/Linux)
2. Run "Send Notification"

### Custom Keybindings

Add custom keybindings to your `keybindings.json`:

```json
{
  "key": "cmd+shift+n",
  "command": "vscode-notify.sendNotification",
  "args": {
    "message": "Your custom message here",
    "type": "info"
  }
}
```

### Parameters

- `message` (optional): The notification message text. Defaults to "Hello from VS Code Notify!"
- `type` (optional): The notification type. Options are:
  - `"info"` - Information message (default)
  - `"warning"` - Warning message
  - `"error"` - Error message

### Examples

```json
// Info notification
{
  "key": "cmd+alt+i",
  "command": "vscode-notify.sendNotification",
  "args": {
    "message": "Build completed successfully!",
    "type": "info"
  }
}

// Warning notification
{
  "key": "cmd+alt+w",
  "command": "vscode-notify.sendNotification",
  "args": {
    "message": "This is a warning message",
    "type": "warning"
  }
}

// Error notification
{
  "key": "cmd+alt+e",
  "command": "vscode-notify.sendNotification",
  "args": {
    "message": "Something went wrong!",
    "type": "error"
  }
}
```

## Installation

### From VSIX file

1. Download the `.vsix` file
2. Install via Command Palette: "Extensions: Install from VSIX..."
3. Or use CLI: `code --install-extension vscode-notify-0.0.1.vsix`

### Development

1. Clone this repository
2. Run `npm install`
3. Press `F5` to launch Extension Development Host
4. Test the extension in the new VS Code window

## License

MIT
