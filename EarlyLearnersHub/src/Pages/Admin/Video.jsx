import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../../components/Modal';
import AddVideoForm from '../../components/AddVideoForm';
import Buttons from '../../components/Buttons';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SweetAlert from '../../components/SweetAlert';

const Video = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videos, setVideos] = useState([]);
  const [editingVideo, setEditingVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/videos');
      setVideos(response.data);
    } catch (error) {
      SweetAlert.showError('Error fetching videos', error);
    }
  };

  const handleAddVideo = async (video) => {
    try {
      if (editingVideo) {
        await axios.put(`http://localhost:5000/videos/${editingVideo.id}`, video);
        setEditingVideo(null);
      } else {
        await axios.post('http://localhost:5000/videos', video);
      }
      fetchVideos();
      setIsModalOpen(false);
    } catch (error) {
      SweetAlert.showError('Error adding/updating video', error);
    }
  };

  const handleEditVideo = (video) => {
    setEditingVideo(video);
    setIsModalOpen(true);
  };

  const handleDeleteVideo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/videos/${id}`);
      fetchVideos();
      SweerAlert.showInfo('Video are u sure?');
    } catch (error) {
      console.error('Error deleting video', error);
    }
  };

  return (
    <div>
      <div className='w-full h-[10dvh] bg-white rounded-lg shadow-lg shadow-slate-400 flex items-center'>
        <h1 className='text-2xl ml-5 font-semibold'>Video</h1>
      </div>
      <div className='w-full mt-5 h-[80dvh] bg-white rounded-lg shadow-lg p-4 shadow-slate-400 overflow-y-auto'>
      <Buttons type="button" label="Add Video" styleType="primary5" onClick={() => setIsModalOpen(true)} />
        {videos.length > 0 ? (
          <ul>
            {videos.map((video) => (
              <li key={video.id} className='border-b pb-4 mb-4 flex justify-between items-center'>
                <div>
                  <h3 className="text-lg font-medium">{video.title}</h3>
                  <p>{video.description}</p>
                  <img src={video.thumbnail} alt="picture" className='w-[20vw] h-full' />
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className='text-blue-500'>
                    Watch Video
                  </a>
                </div>
                <div className='flex gap-2'>
                  <button onClick={() => handleEditVideo(video)} className='text-yellow-500'>
                    <EditIcon />
                  </button>
                  <button onClick={() => handleDeleteVideo(video.id)} className='text-red-500'>
                    <DeleteIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center'>No videos added yet.</p>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddVideoForm onAddVideo={handleAddVideo} initialData={editingVideo} />
      </Modal>
    </div>
  );
};

export default Video;
