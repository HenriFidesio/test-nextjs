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
    const [total, setTotal] = React.useState(0);
    const [error, setError] = React.useState(null);

    const onDrop = async (acceptedFiles, rejectedFiles) => {
        const resp = await apiService.post({url: 'Binary', data: acceptedFiles});
        setFiles([...files, ...acceptedFiles]);
        getTotalBinary();
    };

    const getTotalBinary = async () => {
        const resp = await apiService.get({url: 'Binary'});
        console.log(resp);
        if (resp.total) setTotal(resp.total);
    }

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
                                <p className="attach-files__title">Drop your photo here ...</p>
                            ) : (
                                <p className="attach-files__title">
                                    Click here to browse your photos, or drag them here:
                                </p>
                            )}
                            {error &&
                                <p className="attach-files__error">{error}</p>
                            }
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
            {total > 0 &&
                <p className="attach-files__total">
                    There is <span className="attach-files__total__number">{total}</span> resources in API
                </p>
            }
        </div>
    )

}

export default AttachFilesComp;