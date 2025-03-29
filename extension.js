const vscode = require("vscode")

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("validate", () => {
      vscode.window.showInformationMessage("it works")
    }),
    vscode.commands.registerCommand("swapFilenamesBetter", async(uri, selectedUris) => {
        // 获取当前在资源管理器中选中的文件
        let filesToSwap = [];
      
        // 如果有传入的选中文件，则使用它们
        if (selectedUris && selectedUris.length === 2) {
          filesToSwap = selectedUris;
        } 
        // 否则弹出提示
        else {
          vscode.window.showErrorMessage("请选择恰好两个文件");
          return;
        }
  
        const [file1, file2] = filesToSwap;
        const file1Path = file1.fsPath;
        const file2Path = file2.fsPath;
        const tempPath = file1Path + ".temp";
  
        try {
          await vscode.workspace.fs.rename(file1, vscode.Uri.file(tempPath));
          await vscode.workspace.fs.rename(file2, vscode.Uri.file(file1Path));
          await vscode.workspace.fs.rename(vscode.Uri.file(tempPath), vscode.Uri.file(file2Path));
          vscode.window.showInformationMessage(`成功交换文件名: ${file1Path.split('/').pop()} ↔ ${file2Path.split('/').pop()}`);
        } catch (error) {
          vscode.window.showErrorMessage(`交换文件名时出错: ${error.message}`);
        }
    })
  )
}

module.exports = {activate}
