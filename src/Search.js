import React from "react";
import ReactDOM from "react-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.getPhotosByAlbumId = this.getPhotosByAlbumId.bind(this);
        this.state = { photos: [], errors: [], arePhotosAvailable: false, albumId: "" };
    }

    handleUserInput = (e) => {
        this.setState({ albumId: e.target.value })
    }

    getPhotosByAlbumId = () => {
        const valueNumber = parseInt(this.state.albumId);
        if (!isNaN(valueNumber)) {
            if (valueNumber > 0 && valueNumber <= 100) {
                fetch('https://jsonplaceholder.typicode.com/albums/' + this.state.albumId + '/photos')
                    .then((response) => response.json())
                    .then((photos) => {
                        this.setState({ photos: photos, errors: [], arePhotosAvailable: true, albumId: '' });
                    });
            } else {
                this.setState({ errors: ["There is no album by that ID. Consider entering a number between 1 and 100 inclusive"] })
            }
        } else {
            this.setState({ errors: ["Please enter a valid album id"] });
        }
    }

    render() {
        var availableErrors = [];
        var j = 0;
        this.state.errors.forEach((availableError) => {
            availableErrors.push(
                <p key={j.toString}>{availableError}</p>
            );
            j++;
        });

        var fetchedPhotos = [];
        var i = 0;
        this.state.photos.forEach((photo) => {
            fetchedPhotos.push(
                <div key={i.toString()} className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <div className="bg-blue-200 shadow-2xl rounded-2xl lg:h-80 overflow-hidden">
                        <img src={photo.thumbnailUrl} alt="thumbnail" className="w-full" />
                        <h1 className="uppercase text-center h-20 overflow-auto">{photo.title}</h1>
                    </div>
                </div>
            );
            i++;
        });
        return (
            <div className="w-full lg:w-9/12 mx-auto bg-blue-900 my-8 rounded-2xl pb-8">
                <div className="mb-4">
                    <div className="flex justify-center items-center gap-8 lg:gap-16 px-2 py-4">
                        {this.state.errors.length > 0 ? <input type="text" value={this.state.albumId} onChange={this.handleUserInput} className="outline-none py-2 px-4 rounded-2xl text-center border-2 border-red-700 bg-blue-200 focus:bg-blue-900 text-blue-900 focus:text-blue-200" /> : <input type="text" value={this.state.albumId} onChange={this.handleUserInput} className="outline-none py-2 px-4 rounded-2xl text-center border-2  bg-blue-200 focus:bg-blue-900 text-blue-900 focus:text-blue-200" placeholder="Enter album id" />}
                        <button onClick={this.getPhotosByAlbumId} className="py-2 px-4 bg-blue-900 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-900 text-blue-200 rounded-2xl text-center">Get Album Photos by Id</button>
                    </div>
                </div>

                {this.state.errors.length > 0 ? <div className="text-red-700 text-center py-8 px-4 w-full mx-auto rounded-2xl bg-white">
                    {availableErrors}
                </div> :
                    this.state.arePhotosAvailable ?
                        <div className="text-blue-900 bg-white grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8 rounded-2xl">
                            {fetchedPhotos}
                        </div> :
                        <div className="text-blue-900 text-center bg-white grid grid-cols-1 px-4 py-8 rounded-2xl">
                            Album photos will be displayed here...
                        </div>
                }
            </div>
        );
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);

export default Search;