export default defineAppConfig({
  name: 'Editorial Theme',
  links: [
    {
      href: '/',
      text: 'Homepage'
    },
    {
      href: '/generic',
      text: 'Generic'
    },
    {
      href: '/elements',
      text: 'Elements'
    },
    {
      text: 'Submenu',
      children: [
        {
          href: '#',
          text: 'Lorem Dolor'
        },
        {
          href: '#',
          text: 'Ipsum Adipiscing'
        },
        {
          href: '#',
          text: 'Tempus Magna'
        },
        {
          href: '#',
          text: 'Feugiat Veroeros'
        },
      ]
    },
    {
      href: '#',
      text: 'Etiam Dolore'
    },
    {
      href: '#',
      text: 'Adipiscing'
    },
    {
      text: 'Another Submenu',
      children: [
        {
          href: '#',
          text: 'Lorem Dolor'
        },
        {
          href: '#',
          text: 'Ipsum Adipiscing'
        },
        {
          href: '#',
          text: 'Tempus Magna'
        },
        {
          href: '#',
          text: 'Feugiat Veroeros'
        },
      ]
    },
    {
      href: '#',
      text: 'Maximus Erat'
    },
    {
      href: '#',
      text: 'Sapien Mauris'
    },
    {
      href: '#',
      text: 'Amet Lacinia'
    }
  ]
})