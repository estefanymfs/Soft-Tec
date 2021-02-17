import React from 'react';
import ChatBot from "react-simple-chatbot";

function chatbot(props) {
    const config = {
        width: "300px",
        height: "400px",
        floating: true,
      };
    const steps =[
        {
            id: '1',
            message: 'Hola bienvenido',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'En que te podemos ayudar',
            trigger: '4'
          },
          {
            id: '4',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'Contamos con esots servicios?',
            trigger:'6'
          },
          {
            id: '6',
            options: [
              { value: 1, label: 'Software', trigger: '7' },
              { value: 2, label: 'Telecomunicaciones', trigger: '8' },
            ],
          },
          {
            id: '7',
            message: 'Tenemos los servicios de desarrollo web, escritori y movil, tambien contamos con soporte técnico y asesoramiento a nivel tecnologico',
            trigger:'9',
          },
          {
            id: '8',
            message: 'Tenemos los servicios de actualización de tecnologías 3g, 4g y 5g tambien servicios de implementación.',
            trigger:'9'
          },
          {
            id: '9',
            message: 'Te interesa alguno de nuestros servicios?',
            trigger:'10'
          },
          {
            id: '10',
            message: 'Muchas gracias por contactarnos con nosotros.',
            end:true,
          },
        
    ];
    return <ChatBot steps={steps} {...config}/>;
}

export default chatbot;
