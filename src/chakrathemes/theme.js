import { extendTheme } from '@chakra-ui/react';
import { CustomMenu as Menu } from '../chakrathemes/CustomMenu';

const customtheme = extendTheme({
  components: {
    Menu,
    Input: {
      parts: ['field'],
      baseStyle: {
        field: {
          width: '20rem',
        },
      },
    },
  },
});

export default customtheme;
