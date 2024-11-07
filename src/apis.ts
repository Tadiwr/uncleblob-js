import { DeleteBlobParams, OverwriteParams, RetrieveParams, UploadedBlob, UploadParams } from "./types";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.UNCLE_BLOB_URL;

/** Takes a `file`, `fileName` and `bucketName` as parameters and uploads the file
 * to the object store
 */

export async function upload({file, bucketName, fileName}: UploadParams) {
    const reqUrl = `${BASE_URL}/storage/upload/${bucketName}/${fileName}`;

    const response = await fetch(reqUrl, {
        method: "POST",
        body: file,
    });

    const result = await response.json() as UploadedBlob;

    return result;
}


/** Takes a `fileName` and `bucketName` as parameters and attempts to retrieve the file
 * from the object store and returns a blob
 */

export async function retrieve({bucketName, fileName} : RetrieveParams) : Promise<Blob | null> {
    
    const reqUrl = `${BASE_URL}/storage/${bucketName}/${fileName}`;

    try {

        const response = await fetch(reqUrl);
        const result = await response.blob();
        return result;

    } catch (err) {
        return null;
    }

}

/** Takes a `fileName` and `bucketName` as 
 * parameters and deletes it from the object store
*/

export async function deleteBlob( {fileName, bucketName} : DeleteBlobParams) {
    const reqUrl = `${BASE_URL}/storage/delete/${bucketName}/${fileName}`;

    try {
        
        const response = await fetch(reqUrl, {
            method: "DELETE"
        });

    } catch (err) {
        console.log(err);
    }

}


/** Takes a `file`, `fileName` and `bucketName` as parameters and overwrites the file
 * to the object store
 */

export async function overwrite({file, fileName, bucketName} : OverwriteParams) 
{
    const reqUrl = `${BASE_URL}/storage/upload/${bucketName}/${fileName}`;

    const response = await fetch(reqUrl, {
        method: "PUT",
        body: file,
    });

    const result = await response.json() as UploadedBlob;

    return result;
}