import Mousetrap from 'mousetrap'
import tasks from './task-definitions'
// for now, let's just keep the keybindings here.

Mousetrap.prototype.stopCallback = () => false


function keyBinding() {
  Object.keys(tasks).forEach((t) => {
    const task = tasks[t]
    if (task.hasKeybinding()) {
      Mousetrap.bind(task.keybindings, task.keybindingCallback)
    }
  })
}

export default keyBinding
