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
      label: 'Track',

      items: [
        'track/index',
        {
          type: 'category',
          label: 'Software',
          items:[
            'track/software/index',
          ]
        },
        {
          type: 'category',
          label: 'business',
          items: [
            'track/business/index',
          ]
        },
        {
          type: 'category',
          label: 'book club',
          items: [
            'track/bookClub/index',
          ]
        },
      ]
    },

    {
      type: 'category',
      label: 'Legal',

      items: [
        'legal/cookiePolicy',
        'legal/disclaimer',
        'legal/privacyNotice',
        'legal/termsOfUse',
      ]
    },

  ],
}
