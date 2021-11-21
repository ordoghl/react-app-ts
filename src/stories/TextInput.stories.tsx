import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextInput from '../components/TextInput'

export default {
  title: 'Example/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
)

export const SimpleTextInput = Template.bind({})
SimpleTextInput.args = {}
