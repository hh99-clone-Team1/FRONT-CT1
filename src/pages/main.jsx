import Imageboard from '../shared/Imageboard/Imageboard';

function Main() {
  const images = [
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmIESY%2FbtsFW6NkbhG%2FvbF3KVhKWk5ciJgd6cuyqk%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbqjR5%2FbtsFYCqX9IB%2F8Jj4Cz8YyKTLW9FS294kkk%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9hFJ1%2FbtsFXNGMLSp%2FSFCH1gcBABeLojs6dIbkq0%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcvkpD4%2FbtsFYmPtdDJ%2FoNLqJqCMpcKtGhAikJEs9K%2Fimg.jpg',
    'https://i.pinimg.com/474x/51/32/28/5132288c976019a92273d7d16523c308.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmIESY%2FbtsFW6NkbhG%2FvbF3KVhKWk5ciJgd6cuyqk%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbqjR5%2FbtsFYCqX9IB%2F8Jj4Cz8YyKTLW9FS294kkk%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9hFJ1%2FbtsFXNGMLSp%2FSFCH1gcBABeLojs6dIbkq0%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcvkpD4%2FbtsFYmPtdDJ%2FoNLqJqCMpcKtGhAikJEs9K%2Fimg.jpg',
    'https://i.pinimg.com/474x/51/32/28/5132288c976019a92273d7d16523c308.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmIESY%2FbtsFW6NkbhG%2FvbF3KVhKWk5ciJgd6cuyqk%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbqjR5%2FbtsFYCqX9IB%2F8Jj4Cz8YyKTLW9FS294kkk%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9hFJ1%2FbtsFXNGMLSp%2FSFCH1gcBABeLojs6dIbkq0%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcvkpD4%2FbtsFYmPtdDJ%2FoNLqJqCMpcKtGhAikJEs9K%2Fimg.jpg',
    'https://i.pinimg.com/474x/51/32/28/5132288c976019a92273d7d16523c308.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmIESY%2FbtsFW6NkbhG%2FvbF3KVhKWk5ciJgd6cuyqk%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbqjR5%2FbtsFYCqX9IB%2F8Jj4Cz8YyKTLW9FS294kkk%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9hFJ1%2FbtsFXNGMLSp%2FSFCH1gcBABeLojs6dIbkq0%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcvkpD4%2FbtsFYmPtdDJ%2FoNLqJqCMpcKtGhAikJEs9K%2Fimg.jpg',
    'https://i.pinimg.com/474x/51/32/28/5132288c976019a92273d7d16523c308.jpg',
  ];

  return <Imageboard images={images} mainboard />;
}

export default Main;
