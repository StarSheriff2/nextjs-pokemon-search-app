import { styled } from '@/stitches.config';

const Text = styled('p', {
  variants: {
    textStyle: {
      textLead: {
        fontSize: '$4',
        fontWeight: '$2',
        letterSpacing: 0,
        lineHeight: 0,
      },
      textParagraph: {
        fontSize: '$3',
        fontWeight: '$2',
        letterSpacing: 0,
        lineHeight: 0,
      },
      textParagraphSemibold: {
        fontSize: '$3',
        fontWeight: '$3',
        letterSpacing: 0,
        lineHeight: 0,
      },
      textSmall: {
        fontSize: '$2',
        fontWeight: '$2',
        letterSpacing: 0,
        lineHeight: '$6',
      },
      textSmallSemibold: {
        fontSize: '$2',
        fontWeight: '$3',
        letterSpacing: 0,
        lineHeight: 0,
      },
      textTiny: {
        fontSize: '12px',
        fontWeight: '$2',
        letterSpacing: 0,
        lineHeight: 0,
      },
      buttonLowercase: {
        fontSize: '$3',
        fontWeight: '$3',
        letterSpacing: 0,
        lineHeight: 0,
      },
    },
  },
});

export default Text;
