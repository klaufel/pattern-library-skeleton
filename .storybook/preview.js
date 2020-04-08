import {addParameters, addDecorator} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import ThemeWrapper from '../src/decorators/ThemeWrapper'
import SBContainer from '../src/decorators/SBContainer'

addParameters({
  options: {
    showRoots: true
  }
})

addDecorator(ThemeWrapper)

addDecorator(SBContainer)

addDecorator(withKnobs)
