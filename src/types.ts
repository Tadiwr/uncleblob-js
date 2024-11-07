/** Represents the results of a blob upload */

export type UploadedBlob = {

    /** The name of the file */
    fileName: string,

    /** The name of the bucket where the blob is stored under */
    bucketName: string,

    /** The url to access the blob */
    url: string
}


export type RetrieveParams = {
    bucketName: string,
    fileName: string
}

export type UploadParams = RetrieveParams & {
    file: File,
}

export type DeleteBlobParams = RetrieveParams;

export type OverwriteParams = UploadParams;