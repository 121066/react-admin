const {app,BrowserWindow,Menu}=require('electron')
const reloader=require('electron-reloader')
reloader(module)
console.log(module)
// 监听初始化完成
app.on('ready',()=>{
const mainWindow= new BrowserWindow({
    width:900,
    height:500,
    frame:false,
    webPreferences:{
        nodeIntegration:true,
        enableRemoteModule:true
    }
    
 })
//  mainWindow.loadFile('./build/index.html')
 mainWindow.loadURL('http://localhost:3000')
 mainWindow.webContents.openDevTools()
 const template=[
    {
        label:'文件',
        submenu:[
            {
                label:'打开',
                accelerator:'CmdOrCtrl+O',
                click(){
                    mainWindow.webContents.openDevTools()
                }
            },
            {
                label:'保存',
                accelerator:'CmdOrCtrl+S',
                click(){
                    mainWindow.webContents.saveDevTools()
                }
            }
        ]
    }
 ]
 const menu=Menu.buildFromTemplate(template)
 Menu.setApplicationMenu(menu)
})