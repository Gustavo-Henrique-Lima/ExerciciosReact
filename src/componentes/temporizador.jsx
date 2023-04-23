import React from 'react';
import Menu from './menu';

class Temporizador extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            minutes: 0,
            seconds: 0,
        };
    }

    contar() {
        if (parseInt(this.state.seconds)<59) {
            this.setState
                (
                    (state) => ({ seconds: state.seconds + 1 }),
                );
        }
        else {
            this.zeroSecond();
            this.setState(
                (state) => ({ minutes: state.minutes + 1, seconds: state.seconds + 1 }),
            );
            }
    }

    startStop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        else {
            this.interval = setInterval(() => this.contar(), 1000);
        }
    }

    zeroSecond() {
        this.setState(() => ({
            seconds: 0,
        }));
    }
    zero() {
        this.setState(() => ({
            minutes: 0,
            seconds: 0,
        }));
    }

    visor() {
        const { minutes, seconds } = this.state;
        return `${minutes}:${seconds}`;
    }
    render() {
        document.title = "Temporizador";
        return (<>
            <div className="bg-slate-800 h-screen">
                <Menu />
                <div className="flex items-center justify-center">
                    <div className="bg-gray-400 rounded-2xl border-4 border-preto w-80 p-4 gap-4 flex flex-col m-4">
                        <div className="bg-preto border-black rounded-xl flex flex-col justify-center items-center">
                            <h1 className="text-5xl text-branco cronometro">
                                {this.visor()}
                            </h1>
                        </div>
                        <div className="flex flex-row justify-around">
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-bold text-sm">START/STOP</p>
                                <input type="button" value="" onClick={() => this.startStop()} className="bg-green-600 hover:bg-azulEscuro/80 w-10 h-10 rounded-full cursor-pointer" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="font-bold text-sm">RESET</p>
                                <input type="button" value="" onClick={() => this.zero()} className="bg-red-800 hover:bg-red-800/80 w-10 h-10 rounded-full cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
    }
}

export default Temporizador;