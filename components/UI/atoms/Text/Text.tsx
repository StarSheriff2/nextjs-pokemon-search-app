import { styled } from '@/stitches.config';

const Text = styled('p', {
  variants: {
    textStyle: {
      textLead: {
        fontSize: '$4',
        // fontFamily: '$quicksand',
        fontWeight: '$2',
        letterSpacing: 0,
        lineHeight: 0,
      },
      textParagraph: {
        fontSize: '$3',
        // fontFamily: '$quicksand',
        fontWeight: '$2',
        letterSpacing: 0,
        lineHeight: 0,
      },
      textParagraphSemibold: {
        fontSize: '$3',
        // fontFamily: '$quicksand',
        fontWeight: '$3',
        letterSpacing: 0,
        lineHeight: 0,
      },
      textSmall: {
        fontSize: '$2',
        // fontFamily: '$quicksand',
        fontWeight: '$2',
        letterSpacing: 0,
        lineHeight: 0,
      },
      textSmallSemibold: {
        fontSize: '$2',
        // fontFamily: '$quicksand',
        fontWeight: '$3',
        letterSpacing: 0,
        lineHeight: 0,
      },
      textTiny: {
        fontSize: '12px',
        // fontFamily: '$quicksand',
        fontWeight: '$2',
        letterSpacing: 0,
        lineHeight: 0,
      },
      buttonLowercase: {
        fontSize: '$3',
        // fontFamily: '$quicksand',
        fontWeight: '$3',
        letterSpacing: 0,
        lineHeight: 0,
      },
    },
  },
});

export default Text;
