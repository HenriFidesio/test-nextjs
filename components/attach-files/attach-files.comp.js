// core
import React from 'react';
// libs
import Dropzone from 'react-dropzone';
// services
import { apiService } from 'services';

/**
 *
 */
const AttachFilesComp = () => {

    const [files, setFiles] = React.useState([]);

    const onDrop = async (acceptedFiles, rejectedFiles) => {
        
        const promises = acceptedFiles.map( file => apiService.post({url: 'Binary', data: [file]}) ); 

        Promise.all(promises)
            .then(resp => {
                console.log(resp)
                setFiles([...files, ...acceptedFiles]);
            })
            .catch(({ error }) => {
                console.log(error);
            });

        // const resp = await apiService.post({url: 'Binary', data: acceptedFiles});
        // console.log(resp)

    };

    const getPreview = file => URL.createObjectURL(file);

    return (
        <div className="attach-files">
            <Dropzone
                onDrop={onDrop}
                multiple={true}
            >
                {({ getRootProps, getInputProps, isDragActive }) => {
                    return (
                        <>
                            {isDragActive ? (
                                <p className="attach-files__title">Placez votre photo dessous ...</p>
                            ) : (
                                <p className="attach-files__title">
                                    Cliquer pour sélectionner votre photo,
                                    ou la dragguer ci-dessous:
                                </p>
                            )}
                            <div
                                {...getRootProps()}
                                className={`attach-files__dropzone ${
                                    isDragActive
                                        ? 'attach-files__dropzone--active'
                                        : ''
                                }`}
                            >
                                <input {...getInputProps()} />
                                <i className="attach-files__dropzone__icon" />
                                <span className="attach-files__dropzone__cover">
                                    {' '}
                                </span>
                            </div>
                        </>
                    );
                }}
            </Dropzone>
            <ul className="attach-files__preview">
                {files.map((file, idx) => (
                    <li key={idx} className="attach-files__preview__item">
                        <span
                            style={{
                                backgroundImage: `url(${getPreview(
                                    file
                                )})`,
                            }}
                            className="attach-files__preview__item__img"
                        >
                            {' '}
                        </span>
                        <span className="attach-files__preview__item__info">
                            {file.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default AttachFilesComp;