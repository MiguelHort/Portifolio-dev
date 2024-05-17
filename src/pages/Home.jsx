import Header from '../components/Header';
import Card1 from '../components/Card1';

import ElementoVisual1 from '../assets/icons/ElementoVisual1';
import { Brush, CodeXml, FileJson, Github , Instagram, Linkedin } from 'lucide-react';



function Home() {
    return (
        <main>
            <Header></Header>
            <main>
                <section className='flex justify-center w-full h-[80vh] relative'>
                    <ElementoVisual1></ElementoVisual1>
                    <div className='flex justify-between items-center w-4/5'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-slate-600'>Olá, eu sou</p>
                            <p className='text-5xl font-black ml-[-4px]'>Miguel Hort</p>
                            <p className='text-slate-600'>Desenvolvedor Web</p>
                            <div className='flex justify-start items-center gap-6 mt-4'>
                            <Instagram className='stroke-blue-500 hover:stroke-black cursor-pointer' />
                            <Linkedin className='stroke-blue-500 hover:stroke-black cursor-pointer' />
                            <Github className='stroke-blue-500 hover:stroke-black cursor-pointer' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 px-7 py-8 bg-white text-sm shadow rounded-xl text-blue-500 relative'>
                            <p>1&nbsp;&nbsp;class <b>Person</b> {'{'}</p>
                            <p>2&nbsp;&nbsp;&nbsp;&nbsp;constructor{'() {'}</p>
                            <p>3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name = "<b>Anurag Hazra</b>";</p>
                            <p>4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.traits = {'['}"<b>DESIGN</b>", "<b>DEV</b>"{']'};</p>
                            <p>5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.age = new Date{'()'}.getFullYear{'()'} - 2001;</p>
                            <p>6&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</p>
                            <p>7&nbsp;&nbsp;{'}'}</p>
                            <div className='flex gap-1 p-2 bg-white rounded shadow absolute left-[-40px] bottom-[-15px]'>
                                <button className='bg-blue-400 w-6 h-6 rounded hover:scale-105'></button>
                                <button className='bg-blue-500 w-6 h-6 rounded hover:scale-105'></button>
                                <button className='bg-blue-300 w-6 h-6 rounded hover:scale-105'></button>
                                <button className='bg-blue-600 w-6 h-6 rounded hover:scale-105'></button>
                                <button className='bg-blue-800 w-6 h-6 rounded hover:scale-105'></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='flex justify-center w-full mt-24'>
                    <div className='flex justify-between items-center w-4/5'>
                        <Card1
                        icon={<CodeXml className='stroke-white w-10 h-10' />}
                        title={'Celta'}
                        text={'Im more front end focused and love to work with Reactjs as well as pure HTML, CSS.'}
                        ></Card1>
                        <Card1
                        icon={<FileJson className='stroke-white w-10 h-10' />}
                        title={'Celta'}
                        text={'Amo celta 1.0 turbo'}
                        ></Card1>
                        <Card1
                        icon={<Brush className='stroke-white w-10 h-10' />}
                        title={'Celta'}
                        text={'Amo celta 1.0 turbo'}
                        ></Card1>
                    </div>
                </section>


            </main>
        </main>
    );
}

export default Home;


// 1&nbsp;&nbsp;class <b>Person</b> <!-- -->
