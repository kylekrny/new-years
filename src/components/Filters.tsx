import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';

const memoryOptions = [
  { name: 'Professional', inStock: true },
  { name: 'Relationships', inStock: true },
  { name: '16 GB', inStock: true },
  { name: '32 GB', inStock: true },
  { name: '64 GB', inStock: true },
  { name: '128 GB', inStock: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Filters = () => {
  const [mem, setMem] = useState(memoryOptions[2]);
  return (
    <div className='mb-6'>
      <fieldset aria-label='Choose a memory option'>
        <div className='flex items-center justify-between'>
          <div className='text-sm/6 font-medium text-gray-900'>
            Filter by Category
          </div>
        </div>

        <RadioGroup
          value={mem}
          onChange={setMem}
          className='mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6'
        >
          {memoryOptions.map((option) => (
            <Radio
              key={option.name}
              value={option}
              disabled={!option.inStock}
              className={classNames(
                option.inStock
                  ? 'cursor-pointer focus:outline-none'
                  : 'cursor-not-allowed opacity-25',
                'flex items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus])]:[&:not([data-checked])]:ring-inset'
              )}
            >
              {option.name}
            </Radio>
          ))}
        </RadioGroup>
      </fieldset>
    </div>
  );
};
export default Filters;