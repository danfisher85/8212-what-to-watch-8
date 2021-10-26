import {Comments} from 'types/comment';

export const comments: Comments = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Paula Fleri-Soler',
    },
    rating: 8.0,
    comment: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    date: 'December 20, 2016',
  },
  {
    id: 2,
    user: {
      id: 1,
      name: 'Paula Fleri-Soler',
    },
    rating: 7.6,
    comment: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    date: 'December 20, 2016',
  },
  {
    id: 3,
    user: {
      id: 2,
      name: 'Matthew Lickona',
    },
    rating: 7.2,
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    date: 'December 20, 2016',
  },
  {
    id: 4,
    user: {
      id: 3,
      name: 'Amanda Greever',
    },
    rating: 8.0,
    comment: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
    date: 'November 18, 2015',
  },
  {
    id: 5,
    user: {
      id: 4,
      name: 'Bill Goodykoontz',
    },
    rating: 8.0,
    comment: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    date: 'November 18, 2015',
  },
  {
    id: 6,
    user: {
      id: 4,
      name: 'Bill Goodykoontz',
    },
    rating: 8.9,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    date: 'December 24, 2016',
  },
];
