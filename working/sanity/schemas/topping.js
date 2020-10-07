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
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the Topping',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Is this topping vegetarian?',
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
    prepare: ({ name, vegetarian }) => ({
      title: ` ${name} ${vegetarian ? '🌱 ' : ''}`,
    }),
  },
};
