import styled from 'styled-components';

// icons
import { ReactComponent as Play } from '../../../assets/icons/play.svg';
import { ReactComponent as Star } from '../../../assets/icons/star.svg';
import img from '../../../assets/imgs/less.png';

const Wrap = styled.div`
  background: #fff;
`;

Wrap.Wrap = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

Wrap.Header = styled.div`
  padding-top: 100px;
`;

Wrap.Text = styled.div`
  max-width: 545px;
  margin: 0 auto;
  margin-top: 28px;
  padding: 0 30px;
  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
  }
`;

Wrap.CardWrap = styled.div`
  display: flex;
  align-items: center;
  height: 590px;
  margin: 50px auto;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #8a90a5;
  border-radius: 11px;
  border-top-left-radius: 10px;
  @media (max-width: 1360px) {
    margin: 40px 20px;
  }
  @media (max-width: 800px) {
    margin: 40px auto;
    width: 84%;
    flex-direction: column;
  }
`;

Wrap.Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 77;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(32, 81, 137, 0.22),
      rgba(32, 81, 137, 0.22)
    ),
    url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  @media (max-width: 800px) {
    width: 100%;
    height: 400px;

    border-radius: 8px 8px 0px 0px;
  }
`;

Wrap.Play = styled(Play)`
  width: 28px;
  height: 25px;
`;

Wrap.PlayCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);
  cursor: pointer;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 59;
  height: 100%;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px;
`;

Status.Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 320px;
  height: 380px;
  background: #ffffff;
  border: 1px solid #eff2f7;
  box-shadow: 0px 10px 16px rgba(32, 81, 137, 0.06);
  border-radius: 6px;
  box-sizing: border-box;
  padding: 20px;
`;

Status.Img = styled.img``;

Status.Plus = styled.div`
  margin-top: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #1d72d2;

  span {
    padding: 4px 6px;
    width: 44px;
    height: 23px;
    background: #eff2f7;
    border-radius: 4px;
    margin: 0 8px;
  }
`;

Status.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #323a56;
  margin: 24px 0 12px 0;
`;

Status.Price = styled.div``;

Status.Status = styled.div``;

Wrap.StarWrap = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #1d72d2;
  margin-top: 30px;
  margin-left: auto;
`;

Wrap.Star = styled(Star)`
  cursor: pointer;
  margin-right: 8px;
  path {
    fill: ${({ active }) => (active === 'true' ? '#F8C100' : '#EFF2F7')};
  }
`;

export { Wrap, Status };
