import { Injectable } from '@angular/core'

declare let toastr:any
@Injectable()
export class ToastrService {

    success(message:string){
        toastr.success(message)
    }

    //success(message: string, title?: string) {
     //  toastr.sucess(message, title)
    //}

    info(message: string) {
        toastr.info(message)
    }

    warning(message: string) {
        toastr.sucess(message)
    }

    error(message:string){
        toastr.error(message)
        }
}