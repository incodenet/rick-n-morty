import {Images} from '../../../assets/images';
import {root} from './p-footer.styles';

export const PFooter = () => {
  return (
    <footer className={root}>
      <img src={Images.Logo} alt="" width={50} height={50} />
      <div>
        <h3>The Rick and Morty</h3>
      </div>
      <a href="https://github.com/incodenet/rick-n-morty" rel="noopener noreferrer" target="_blank">
        <img src={Images.GithubLogo} alt="" width={35} height={35} />
      </a>
      <div>Copyright © 2022</div>
    </footer>
  );
};
