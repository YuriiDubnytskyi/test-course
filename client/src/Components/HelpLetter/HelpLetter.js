import React from 'react'
import { Form, Input, Button } from 'antd';
import './HelpLetter.css'
import img from './../../img/undraw_Newsletter_re_wrob.svg'


const { TextArea } = Input;
export default function HelpLetter(props) {
    console.log('render+HelpLetter')
    return (
        <div className='letter__container letter'>
            <div className='letter__options options'>
                <div className='options__description description-letter'>
                    <h1 className='description-letter__title'>Винникли проблеми ??</h1>
                    <p className='description-letter__text'>
                        Напишить нам листа з проблемою або з пропозицією і ми обовязково звернемо на це увагу.
                        Ми постараємось виправити все і повідомимо вас про результат.
                    </p>
                </div>
                <Form className='options__form form-letter' name="nest-messages" onFinish={props.onFinish} validateMessages={props.validateMessages}>
                    <Form.Item className='form-letter__label label--letter' name={['user', 'name']} label="Імя" rules={[{ required: true }]}>
                        <Input className='form-letter__input input--letter'/>
                    </Form.Item>
                    <Form.Item  className='form-letter__label label--letter' name={['user', 'email']} label="Eлектронна пошта" rules={[{ type: 'email',required: true }]}>
                        <Input className='form-letter__input input--letter'/>
                    </Form.Item>
                    <Form.Item  className='form-letter__label label--letter' name={['user', 'title']} label="Загаловок" rules={[{ required: true }]}>
                        <Input className='form-letter__input input--letter'/>
                    </Form.Item>
                    <Form.Item  className='form-letter__label label--letter' name={['user', 'text']} label="Текст повідомлення" rules={[{ required: true }]}>
                        <TextArea className='form-letter__textarea textarea--letter'/>
                    </Form.Item>
                    {props.success?<p>{()=>props.successFull()}</p>:<></>}
                    <Form.Item className='form-letter__label label--letter'>
                        <Button className='form-letter__submit submit-btn--letter' type="primary" htmlType="submit" loading={props.loading}>
                            Відправити
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='letter__img img-container--letter'>
                <img src={img} className='img-container__img--letter img--letter' alt='letter img'/>
            </div>
        </div>
    )
}
