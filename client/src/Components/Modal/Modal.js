import { Modal, Button, Space } from 'antd';


export const Success = (okSuccess)=> {
    Modal.success({
        title: 'Success',
        onOk() {}
    });
  }
export const SuccessBuy = (okSuccess)=> {
    Modal.success({
        title: 'Success',
        onOk() {okSuccess()}
    });
}
export const SuccessText = (okSuccess)=> {
    Modal.success({
        title: 'Success',
        onOk() {okSuccess()}
    });
}
export const SuccessDelete = (okSuccess)=> {
    Modal.success({
        title: 'Success',
        onOk() {okSuccess()}
    });
}