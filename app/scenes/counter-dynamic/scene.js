import { createScene } from 'kea/scene'

import sceneComponent from '~/scenes/counter-dynamic/index'

export default createScene({
  name: 'counter-dynamic',
  component: sceneComponent
})
