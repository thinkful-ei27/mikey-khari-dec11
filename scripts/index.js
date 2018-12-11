'use strict';
/* global $ */
const API_KEY = 'AIzaSyBAKhCTOtb3-S-Wte0fjczDtEre6phRI6c';

const MOCK_DATA ={
  'kind': 'youtube#searchListResponse',
  'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/rEJHCf3AxSyWVjX7ejbZm41zNWw"',
  'nextPageToken': 'CAUQAA',
  'regionCode': 'US',
  'pageInfo': {
    'totalResults': 1000000,
    'resultsPerPage': 5
  },
  'items': [
    {
      'kind': 'youtube#searchResult',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/hMPDEHxB_Rr7wy2Y5vgw0x-cfZM"',
      'id': {
        'kind': 'youtube#channel',
        'channelId': 'UCa_xHe7N8h1kFQsOIFWSCbQ'
      },
      'snippet': {
        'publishedAt': '2018-05-15T12:27:13.000Z',
        'channelId': 'UCa_xHe7N8h1kFQsOIFWSCbQ',
        'title': 'Little Lizard - Fortnite',
        'description': 'Welcome to Little Lizard Fortnite! We love building fun characters up and making stories around them, that\'s why we\'re making high quality, fully voice acted ...',
        'thumbnails': {
          'default': {
            'url': 'https://yt3.ggpht.com/-5g9y7ZG0XSA/AAAAAAAAAAI/AAAAAAAAAAA/dEPRZdgaHh8/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
          },
          'medium': {
            'url': 'https://yt3.ggpht.com/-5g9y7ZG0XSA/AAAAAAAAAAI/AAAAAAAAAAA/dEPRZdgaHh8/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'
          },
          'high': {
            'url': 'https://yt3.ggpht.com/-5g9y7ZG0XSA/AAAAAAAAAAI/AAAAAAAAAAA/dEPRZdgaHh8/s800-c-k-no-mo-rj-c0xffffff/photo.jpg'
          }
        },
        'channelTitle': 'Little Lizard - Fortnite',
        'liveBroadcastContent': 'upcoming'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/MBYWEVE8tf8Sdb6iYE_xBNEL63w"',
      'id': {
        'kind': 'youtube#video',
        'videoId': '0v1uj9lzQyQ'
      },
      'snippet': {
        'publishedAt': '2018-03-01T04:34:39.000Z',
        'channelId': 'UCYJkz44KRzuO8pxspJ9uocw',
        'title': 'Lizards Are Awesome',
        'description': 'I bet you didn\'t know you wanted a pet lizard.',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/0v1uj9lzQyQ/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/0v1uj9lzQyQ/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/0v1uj9lzQyQ/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Video Digest, The Ultimate Compilations',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/b4ZAtXlkQBAWVdYlyXDUrCCftTo"',
      'id': {
        'kind': 'youtube#video',
        'videoId': '5GjEnbrJuZA'
      },
      'snippet': {
        'publishedAt': '2018-06-21T19:00:00.000Z',
        'channelId': 'UCYK1TyKyMxyDQU8c6zF8ltg',
        'title': 'Ultimate Funny Lizard Compilation of 2018 | Funny Pet Videos',
        'description': 'This all lizard and reptile weekly comp from Funny Pet Videos is filled with hilarious bloopers and reaction shots from the funniest lizards, Geckos, Iguanas, ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/5GjEnbrJuZA/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/5GjEnbrJuZA/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/5GjEnbrJuZA/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Funny Pet Videos',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/pJ1VunmRIuelHxoboWU3LDf5bD8"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'RGagPakT-9c'
      },
      'snippet': {
        'publishedAt': '2018-08-30T18:23:16.000Z',
        'channelId': 'UCkrKW1_u0O8qSc3xsLoRHew',
        'title': 'BUILDING MY LIZARD HIS DREAM CAGE! (DIY)',
        'description': 'Built our lizard Bernie his dream cage and flipped into our rooftop ball pit and failed to build a fort! MouthyBuddah: https://youtu.be/bwJasDbUN84 MERCH: ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/RGagPakT-9c/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/RGagPakT-9c/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/RGagPakT-9c/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Funk Bros',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/sUFvkNwj9taOyNKbW_sNuzQkP_A"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'HCO7BWbKipU'
      },
      'snippet': {
        'publishedAt': '2018-03-02T12:00:03.000Z',
        'channelId': 'UC6E2mP01ZLH_kbAyeazCNdg',
        'title': 'You\'ll NEVER guess how I caught this lizard!',
        'description': 'Please SUBSCRIBE - http://bit.ly/BWchannel Tour Tickets Available Now! - http://bit.ly/bravetickets Buy Brave Wilderness Gear - http://bit.ly/BWmerch Buy ...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/HCO7BWbKipU/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/HCO7BWbKipU/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/HCO7BWbKipU/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Brave Wilderness',
        'liveBroadcastContent': 'none'
      }
    }
  ]
};



/*
  We want our store to hold an array of "decorated" video objects - i.e. objects that
  have been transformed into ONLY the necessary data we're displaying on our page. 
  (Removes extraneous dataset from Youtube.)
  
  Example decorated video object:
  
  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }
*/
const store = {
  videos: []
};

// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

/**
 * @function fetchVideos
 * Async function, responsible for calling the Youtube API with jQuery, constructing
 * the correct query object, and passing along the callback into the AJAX call.
 * @param {string}   searchTerm
 * @param {function} callback
 */
// TASK:
// 1. Use `searchTerm` to construct the right query object based on the Youtube API docs
//    - Refer to curriculum assignment for help with the required parameters
// 2. Make a getJSON call using the query object and sending the provided callback in 
//    as the last argument

//
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
  const queryObj = {
    q: searchTerm,
    part: 'snippet',
    key: API_KEY
  };
  $.getJSON(BASE_URL, queryObj, callback);
};


/**
 * @function decorateResponse
 * Uses Youtube API response to create an array of "decorated" video objects as 
 * defined at the top of the file.
 * @param   {object} response - should match Youtube API response shape
 * @returns {array}
 */
// TASK:
// 1. Map through the response object's `items` array
// 2. Return an array of objects, where each object contains the keys `id`, `title`, 
//    `thumbnail` which each hold the appropriate values from the API item object. You 
//    WILL have to dig into several nested properties!
//
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  const result = response.items.map(item => { 
    return { 
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.default.url
    };
  });
  return result;
};

// console.log(decorateResponse(MOCK_DATA));

/**
 * @function generateVideoItemHtml
 * Template function, creates an HTML string from a single decorated video object
 * @param   {object} video - decorated video object
 * @returns {string} HTML 
 */
// TASK:
// 1. Using the decorated object, return an HTML string containing all the expected
// TEST IT!
const generateVideoItemHtml = function(video) {
  return `
  <li data-video-id="${video.id}">
    <img src="${video.thumbnail}"/>
    <h3>${video.title}</h3>
    </li>`;
};


// console.log(generateVideoItemHtml(decorateResponse(MOCK_DATA)[1]));
// const results = decorateResponse(MOCK_DATA).map((video) => generateVideoItemHtml(video));
// console.log(results);
/**
 * @function addVideosToStore
 * Store modification function to set decorated video objects
 * @param {array} videos - decorated video objects
 */
// TASK:
// 1. Set the received array as the value held in store.videos
// TEST IT!
const addVideosToStore = function(videos) {
  store.videos = videos;
};

// addVideosToStore(decorateResponse(MOCK_DATA));
// console.log(store);


/**
 * @function render
 * Responsible for scanning store and rendering the video list to DOM
 */
// TASK:
// 1. Map through `store.videos`, sending each `video` through `generateVideoItemHtml`
// 2. Add this array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {
  const liElements = store.videos.map(video => generateVideoItemHtml(video));
  $('.results').html(liElements);
};
// addVideosToStore(decorateResponse(MOCK_DATA));
// render();

/**
 * @function handleFormSubmit
 * Adds form "submit" event listener that 1) initiates API call, 2) modifies store,
 * and 3) invokes render
 */
// TASK:
// 2. Add an event listener to the form that will:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the 
//      `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function(event) {
  event.preventDefault();
$('form').submit()

};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
