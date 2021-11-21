import * as React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 8px 16px;
`

export type TextInputProps = React.ComponentProps<'input'> & {
  onChange?: (value: string) => void
}

const TextInput = React.forwardRef(
  (
    { onChange, ...props }: TextInputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const handleChange = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      if (onChange) {
        onChange(event.target.value)
      }
    }
    return (
      <Input {...props} ref={ref} type="text" onChange={handleChange} />
    )
  },
)

export default TextInput
