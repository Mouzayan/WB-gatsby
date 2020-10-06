import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // cms name
  name: 'topping',
  // human readable title
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'topping',
      title: 'Topping Name',
      type: 'string',
      description: 'Name of the Topping',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Is this topping vegetarian',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: (fields) => ({
      title: `This is the title ${fields.name}`,
    }),
  },
};
