import styled from '@emotion/styled';
import cn from 'classnames';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/modules/hooks';
import { Easing } from '@/styles/utils';
import { toggleThemeMode } from '@/modules/app/slice';

export const ThemeModeCtrl = () => {
  const themeMode = useAppSelector((state) => state.app.themeMode);
  const dispatch = useAppDispatch();
  const handleClickMode = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <Container
      onClick={handleClickMode}
      className={cn('ThemeMode', { dark: themeMode === 'dark' })}
    >
      <div className="btn-mode-dark">
        <div className="icon-img">
          <Image
            src="https://woehmsxrhrkdhblnhdra.supabase.co/storage/v1/object/sign/blog/moon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibG9nL21vb24ucG5nIiwiaWF0IjoxNjY1MjY5NjkwLCJleHAiOjE5ODA2Mjk2OTB9.Lz92DL_yTt3p-EnTtamjDUmTcnCvItbG45_fDFMi9Hw"
            layout={'fill'}
            alt="다크테마"
          />
        </div>
      </div>
      <div className="btn-mode-light">
        <div className="icon-img">
          <Image
            src="https://woehmsxrhrkdhblnhdra.supabase.co/storage/v1/object/sign/blog/sun.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibG9nL3N1bi5wbmciLCJpYXQiOjE2NjUyNjk1MDYsImV4cCI6MTk4MDYyOTUwNn0.4A-wWXGFfqIIBp2Vf_1ld3pZhhCeo9q8d1v6acWXt8A"
            layout={'fill'}
            alt="라이트테마"
          />
        </div>
      </div>
      <Dot />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-left: 30px;
  display: flex;
  align-items: center;
  width: 50px;
  height: 24px;
  background: #010101;
  border-radius: 100px;
  cursor: pointer;
  * {
    user-select: none;
  }
  [class^='btn-mode'] {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
  }
  .btn-mode-dark {
    left: 5px;
    .icon-img {
      position: relative;
      width: 17px;
      height: 17px;
    }
  }
  .btn-mode-light {
    right: 5px;
    .icon-img {
      position: relative;
      width: 18px;
      height: 18px;
    }
  }
`;

const Dot = styled.div`
  position: relative;
  z-index: 10;
  background: #eee;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transition: 0.25s ${Easing.emphasized};
  box-shadow: 0 0 6px rgba(144, 223, 135, 0.8), 0 0 5px rgba(147, 223, 135, 0.7),
    0 0 4px rgba(144, 223, 135, 0.6);

  .ThemeMode:active & {
    box-shadow: 0 0 14px rgb(151, 223, 135), 0 0 10px rgba(144, 223, 135, 0.9),
      0 0 4px rgba(154, 223, 135, 0.8);
  }

  .dark & {
    transform: translateX(28px);
  }
`;

export default ThemeModeCtrl;
