import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { ListBulletIcon } from '@heroicons/react/20/solid';

const categories = [
  { name: 'Career & Work', value: null },
  { name: 'Health & Fitness', value: 1 },
  { name: 'Finances', value: 2 },
  { name: 'Career & Work', value: 3 },
  { name: 'Education & Learning', value: 4 },
  { name: 'Travel & Adventure', value: 5 },
  { name: 'Hobbies & Creativity', value: 6 },
  { name: 'Mental Health', value: 7 },
  { name: 'Relationships', value: 8 },
  { name: 'Lifestyle', value: 9 },
  { name: 'Productivity', value: 10 },
  { name: 'Environment & Social', value: 11 },
  { name: 'Spiritual & Emotional', value: 12 },
  { name: 'Breaking Bad Habits', value: 13 },
  // More items...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Modal = () => {
  const [open, setOpen] = useState(true);
  const [category, setCategory] = useState(categories[0]);
  return (
    <Dialog open={open} onClose={setOpen} className='relative z-10'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
      />

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <DialogPanel
            transition
            className='relative transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
          >
            <div className=''>
              <div className='mt-3 text-center sm:mt-0 sm:text-left'>
                <form action='#' className='relative'>
                  <div className='rounded-lg bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
                    <label htmlFor='title' className='sr-only'>
                      Title
                    </label>
                    <input
                      id='title'
                      name='title'
                      type='text'
                      placeholder='Title'
                      className='block w-full px-3 pt-2.5 text-lg font-medium text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0'
                    />
                    <label htmlFor='description' className='sr-only'>
                      Description
                    </label>
                    <textarea
                      id='description'
                      name='description'
                      rows={2}
                      placeholder='Write a description...'
                      className='block w-full resize-none px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6'
                      defaultValue={''}
                    />

                    {/* Spacer element to match the height of the toolbar */}
                    <div aria-hidden='true'>
                      <div className='py-2'>
                        <div className='h-9' />
                      </div>
                      <div className='h-px' />
                      <div className='py-2'>
                        <div className='py-px'>
                          <div className='h-9' />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='absolute inset-x-px bottom-0'>
                    {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}
                    <div className='flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3'>
                      <Listbox
                        as='div'
                        value={category}
                        onChange={setCategory}
                        className='shrink-0'
                      >
                        <Label className='sr-only'>Add a category</Label>
                        <div className='relative'>
                          <ListboxButton className='relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3'>
                            <ListBulletIcon
                              aria-hidden='true'
                              className={classNames(
                                category.value === null
                                  ? 'text-gray-300'
                                  : 'text-gray-500',
                                'size-5 shrink-0 sm:-ml-1'
                              )}
                            />
                            <span
                              className={classNames(
                                category.value === null ? '' : 'text-gray-900',
                                'hidden truncate sm:ml-2 sm:block'
                              )}
                            >
                              {category.value === null
                                ? 'Category'
                                : category.name}
                            </span>
                          </ListboxButton>

                          <ListboxOptions
                            transition
                            className='absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow outline outline-1 outline-black/5 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm'
                          >
                            {categories.map((categoryOption) => (
                              <ListboxOption
                                key={categoryOption.value}
                                value={categoryOption}
                                className='cursor-default select-none bg-white px-3 py-2 data-[focus]:relative data-[focus]:bg-gray-100 data-[focus]:hover:outline-none'
                              >
                                <div className='flex items-center'>
                                  <span className='block truncate font-medium'>
                                    {categoryOption.name}
                                  </span>
                                </div>
                              </ListboxOption>
                            ))}
                          </ListboxOptions>
                        </div>
                      </Listbox>
                    </div>
                    <div className='flex items-center justify-end space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3'>
                      <div className='shrink-0'>
                        <button
                          type='submit'
                          className='mr-2 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type='submit'
                          className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
              <button
                type='button'
                onClick={() => setOpen(false)}
                className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
              >
                Deactivate
              </button>
              <button
                type='button'
                data-autofocus
                onClick={() => setOpen(false)}
                className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
              >
                Cancel
              </button>
            </div> */}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
export default Modal;
