import { Checkbox, Divider, Group, RangeSlider, SegmentedControl, ColorSwatch, CheckIcon, rem} from '@mantine/core'
import Card from './Card'
import { useState } from 'react';


const Section = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(true);
  return (
    <div className='flex'>
      <div className='w-1/4 pl-4 pt-4 border-r-2 pb-5 border-b-2'>
      <Checkbox.Group
      label="Categories"
    >
      <Group mt="xs">
        <Checkbox  value="Bedroom" label="Bedroom" />
        <Checkbox value="Sofa" label="Sofa" />
        <Checkbox value="Office" label="Office" />
        <Checkbox value="Outdoor" label="Outdoor" />
      </Group>
    </Checkbox.Group>
    <Divider mt={20}/>
      <Checkbox.Group className='pt-3 '
      label="Brands"
    >
      <Group mt="xs">
        <Checkbox value="Cooking Color" label="Cooking Color" />
        <Checkbox value="Magnifier" label="Magnifier" />
        <Checkbox value="Ashley" label="Ashley" />
        <Checkbox value="M&D" label="M&D" />
        <Checkbox value="Olympic" label="Olympic" />
      </Group>
    </Checkbox.Group>
    <Divider mt={20}/>
    <div className='pt-4 pb-1'>Price</div>
    <div className='mb-10 pr-5'><RangeSlider minRange={100} min={0} max={100000} step={500} defaultValue={[500, 10000]}
     marks={[
        { value: 0, label: '0' },
        { value: 100000, label: '100000' },
      ]} /></div>
      <Divider mt={20}/>
      <div className='pt-4 pb-1'>Size</div>
      <SegmentedControl color='red' data={['XS', 'S ', 'M ','L ','XL']} />
      
      <Divider mt={20}/>
      <div className='pt-4 pb-1'>Color</div>
      <div className='pr-5 flex gap-3'> <ColorSwatch
      component="button"
      color="red"
      onClick={() => setChecked1((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked1 && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch> <ColorSwatch
      component="button"
      color="blue"
      onClick={() => setChecked2((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked2 && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch> 
    <ColorSwatch
      component="button"
      color="black"
      onClick={() => setChecked3((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked3 && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch>
    <ColorSwatch
      component="button"
      color="green"
      onClick={() => setChecked4((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked4 && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch>
    </div>
    </div>
    
      <div className='w-2/3 flex flex-wrap justify-evenly gap-3 pt-4'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}

export default Section
