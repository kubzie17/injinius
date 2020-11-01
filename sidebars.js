/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  "docs": [
    { type: 'category', label: 'Introduction', items: ['about', 'faq'] },
    {
      type: 'category',
      label: 'Library',

      items: [
        'library/getting-started',
        'library/user-management',
        'library/get',
        'library/post',
        'library/patch',
        'library/delete',
        'library/subscribe',
        'library/stored-procedures',
      ],
    },

    {
      type: 'category',
      label: 'Track',

      items: [
        'track/index',
        {
          type: 'category',
          label: 'Software',
          items:[
            'track/software/index',
          ]

        }
      ],
    },


    {
      type: 'category',
      label: 'Realtime',

      items: [
        'realtime/about',
        'realtime/docker',
        'realtime/aws',
        'realtime/digitalocean',
        'realtime/source',
      ],
    },

    { type: 'category', label: 'Postgres', items: ['postgres/postgres-intro'] },
    {
      type: 'category',
      label: 'See Also',
      items: ['guides/examples', 'pricing', 'support', 'handbook/contributing'],
    },
    // Handbook: ['handbook/introduction', 'handbook/contributing'],
  ],
}
