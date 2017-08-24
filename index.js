const {app, Menu, Tray} = require('electron')

app.dock.hide()

let tray = null
app.on('ready', () => {
  tray = new Tray('tray_icon_black.png')
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Item1', type: 'radio'},
    {label: 'Item2', type: 'radio'},
    {label: 'Item3', type: 'radio', checked: true},
    {label: 'Item4', type: 'radio'},
    {label: 'quit', role: 'quit'},
    {label: 'console', click() { console.log('clicked the button') } },
    {label: 'change icon', click() { changeIcon() } }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})

const changeIcon = function() {
  console.log('changing shit')
  tray.setImage('tray_icon_purple.png')
}
