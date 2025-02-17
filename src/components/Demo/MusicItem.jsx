import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Checkbox
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

import StyledLink from 'components/StyledLink';
import PurpleButton from 'components/PurpleButton';

export default function MusicItem({ infos, match }) {
  const [checked, setChecked] = useState([]);
  const handleChange = info => {
    const currentIndex = checked.indexOf(info);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(info);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  console.log(checked, match);

  return (
    <>
      <Box className="box" style={{ padding: 0, flexShrink: 1 }}>
        <List dense={isMobile} sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
          {infos.map(info => (
            <ListItem dense={isMobile} key={info.id} disablePadding>
              {/* <ListItemButton> */}
              <ListItemAvatar>
                <ListItemText
                  primary={info.number || '00000'}
                  sx={{ width: 80, textAlign: 'center' }}
                />
              </ListItemAvatar>
              <ListItemText primary={info.title} secondary={info.artist} />
              {/* </ListItemButton> */}
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                edge="end"
                disabled={checked.length === 3 && checked.indexOf(info) === -1}
                checked={checked.indexOf(info) !== -1}
                onChange={() => handleChange(info)}
                sx={{
                  color: '#7655D9',
                  marginRight: '10px',
                  '&.Mui-checked': {
                    color: '#8b63ff'
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <div style={{ width: '100%', textAlign: 'center', margin: '20px 0', flexShrink: 0 }}>
        <PurpleButton
          disabled={Object.keys(checked).length === 0}
          component={StyledLink}
          to={{ pathname: `${match.url}/result`, state: { checked: checked } }}
        >
          결과확인
        </PurpleButton>
      </div>
    </>
  );
}
