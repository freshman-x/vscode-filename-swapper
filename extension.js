const vscode = require("vscode")

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("validate", () => {
      vscode.window.showInformationMessage("it works")
    }),
    vscode.commands.registerCommand("swapFilenames", async () => {
      const selectedFiles = await vscode.window.showOpenDialog({
        canSelectMany: true,
        openLabel: "Select 2 files to swap names"
      });
      
      if (!selectedFiles || selectedFiles.length !== 2) {
        vscode.window.showErrorMessage("Please select exactly 2 files");
        return;
      }

      const [file1, file2] = selectedFiles;
      const file1Path = file1.fsPath;
      const file2Path = file2.fsPath;
      const tempPath = file1Path + ".temp";

      try {
        await vscode.workspace.fs.rename(file1, vscode.Uri.file(tempPath));
        await vscode.workspace.fs.rename(file2, vscode.Uri.file(file1Path));
        await vscode.workspace.fs.rename(vscode.Uri.file(tempPath), vscode.Uri.file(file2Path));
        vscode.window.showInformationMessage("Files renamed successfully!");
      } catch (error) {
        vscode.window.showErrorMessage(`Error swapping files: ${error.message}`);
      }
    })
  )
}

module.exports = {activate}
