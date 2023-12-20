import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify:{
      generateEmailHTML:({token})=>{
        return `<p>hello pls verify</p>`
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'role',
      defaultValue: 'user',
      required: true,

      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
};
