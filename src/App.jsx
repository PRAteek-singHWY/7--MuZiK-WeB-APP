import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay, Loader } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      {/* sidebar's DONE */}
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#2e6d22]">
        {/* <div className="flex-1 flex flex-col bg-gradient-to-br from-[#1d2956] to-[#790a6a]"> */}

        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
            
              {/* 1st route is Discover */}
              <Route path="/" element={
                // Discover's Done
                <Discover />}
              />

              <Route path="/top-artists" element={<TopArtists />} />


              <Route path="/top-charts" element={<TopCharts />} 

                // Currenly on this
              />


              <Route path="/top-genres-around-you" element={<AroundYou />} />
              <Route path="/artists/:artistid" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {/* {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )} */}

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-tr
          from-white/10 to-[#436a3c] 
          backdrop-blur-lg  rounded-t-3xl z-10">
          <MusicPlayer />
        </div> 
      )}
    </div>
  );
};

export default App;
