import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import { useGoogleSearch } from '../useGoogleSearch';
import Response from '../Response';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  //LIVE API CALL
  const { data } = useGoogleSearch(term);

  //Mock API CALL
  //const data = Response;

  console.log(data);
  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img
            alt=''
            className='searchPage__logo'
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          ></img>
        </Link>
        <div className='searchPage__headerBody'>
          <Search hideButtons></Search>
          <div className='searchPage__options'>
            <div className='searchPage__optionsLeft'>
              <div className='searchPage__option'>
                <SearchIcon></SearchIcon>
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage__option'>
                <DescriptionIcon></DescriptionIcon>
                <Link to='/all'>News</Link>
              </div>
              <div className='searchPage__option'>
                <ImageIcon></ImageIcon>
                <Link to='/all'>Images</Link>
              </div>
              <div className='searchPage__option'>
                <LocalOfferIcon con></LocalOfferIcon>
                <Link to='/all'>Shopping</Link>
              </div>
              <div className='searchPage__option'>
                <RoomIcon></RoomIcon>
                <Link to='/all'>maps</Link>
              </div>
              <div className='searchPage__option'>
                <MoreVertIcon></MoreVertIcon>
                <Link to='/all'>more</Link>
              </div>
            </div>
            <div className='searchPage__optionsRight'>
              {' '}
              <div className='searchPage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className='searchPage__results'>
          <p>
            About {data?.searchInformation.formattedTotalResults}
            results ({data?.searchInformation.formattedSearchTime} seconds) for
            {term}
          </p>

          {data?.items.map((item) => (
            <div className='searchPage_result'>
              <a className='searchPage__resultLink' href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className='searchPage__resultImage'
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=''
                    ></img>
                  )}

                {item.displayLink}
              </a>
              <a className='searchPage__resultTitle' href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage__resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
