import {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import{
    Github,faCode,faCreditCard,faLessThanEqual,faBook,
    faGlobeAfrica, faVideo,faInstagram,faCodeFork,faDiscord } 
from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import leading from './leading.module.css'

export default function Leading(){
    return(
        <div className={leading.body}>
            <header className={leading.container}>
                <nav className={leading.navigation}>
                    <h2>Kandenge-Kode</h2>
                    <ul>
                        <li><Link href='/courses/courses'><a>Cursos</a></Link></li>
                        <li><Link href='/settings/suport'><a>Apoiar</a></Link></li>
                        <li><Link href='settings/suggestion'><a>Sugerir</a></Link></li>
                    </ul>
                    {/* An icon here from github link */}
                    <FontAwesomeIcon icon={Github}></FontAwesomeIcon>
                </nav>
                <div className={leading.wrap}>
                    <div className={leading.account}>
                        <h1>{`Vamos ao espaço com linhas escritas á mão.`}</h1>
                        <p>{`Com programação vamos ao espaço, mas nós vamos além disso.`}</p>
                        <button>
                            <Link href='/account/create'>Criar conta</Link>
                        </button>
                    </div>
                    <div className={leading.image}>
                        <Image 
                            alt='Kode ndenge'
                            width={460} 
                            height={652} 
                            src='/Open Doodles.png' 
                        />
                    </div>
                </div>
            </header>

            <section className={leading.musthave}>
                <h2>{`Compromisso com todos os níveis de Ngola.`}</h2>
                <p>{`Ensinamentos nas mais diversas áreas, as bases, aqui são prioridades.`}</p>
                <h2><span>{`Obrigatório`}</span></h2>
                <div className={leading.courseContainer}>
                    <div className={leading.courses}>
                        <FontAwesomeIcon className={leading.courseIcon}icon={faLessThanEqual}></FontAwesomeIcon>
                        <h3>{`Bases matemática`}</h3>
                        <p>{`Todas as bases funcdamentais para compreender o mundo.`}</p>
                    </div>
                    <div className={leading.courses}>
                        <FontAwesomeIcon className={leading.courseIcon}icon={faCode}></FontAwesomeIcon>
                        <h3>{`Programação para todos`}</h3>
                        <p>{`Aprenda a pensar. dominar as novas tecnologias, cria um aplicativo, site ou um jogo para seu celular`}</p>
                    </div>
                    <div className={leading.courses}>
                        <FontAwesomeIcon className={leading.courseIcon}icon={faGlobeAfrica}></FontAwesomeIcon>
                        <h3>{`Inglês`}</h3>
                        <p>{`Domine o idioma internacional, e tenha grandes oportunidades, como as do mundo a fora.`}</p>
                    </div>
                    <div className={leading.courses}>
                        <FontAwesomeIcon className={leading.courseIcon}icon={faBook}></FontAwesomeIcon>
                        <h3>{`Kimbundu`}</h3>
                        <p>{`Um dia essa língua se tornara oficial, e lembre-se, um povo sem cultura é um povo, sem origem`}</p>
                    </div>
                </div>
            </section>

            {/* <section className={leading.partners}>
                <h2>Parceiros</h2>
                <p>Algumas pessoas que confiam no noso trabalho</p>
                //Som eimages here of th partners
            </section> */}

            <section className={leading.payment}>
                <h2>{`O ensino sempre será gratuíto`}</h2>
                <p>
                    {`
                        Este é um projecto sem fim lucrativo, mas para mante-lo activo
                        precisa-se de dinheiro, portanto você pode doar o que tiver 
                        na secção apoirar e dentre eles com seu cartão, de eleição`
                    }
                </p>
                <FontAwesomeIcon className={leading.fontawsomeicon}size={80} icon={faCreditCard}></FontAwesomeIcon>
            </section>

            <section className={leading.events}>
                <h2>Eventos</h2>
                <div className={leading.eventdetail}>
                    <div className={leading.texts}>
                        <h2>Mona ya kode</h2>
                        <p>{`Um evento anual, para mostrares
                            as tuas habilidades de programação
                            e ganhares, um trofeu.`}
                        </p>
                        <p><span>{`10 á 15 ago`}</span></p>
                    </div>
                    <Image alt='Event mona ya kode' width={487.24} height={380.47} src='/unboxing.png' />
                </div>
            </section>

            <section className={leading.media}>
                <div className={leading.youtube}>
                <FontAwesomeIcon className={leading.youtubeIcon}icon={faVideo}></FontAwesomeIcon>
                    <h2>Youtube</h2>
                    <p><span>{`Nós temos um canal 
                        no youtube onde você
                        pode acompanhar as 
                        aulas.`}</span>
                    </p>
                </div>
                <div className={leading.others}>
                    
                    <FontAwesomeIcon className={leading.mediaSocial} icon={faCodeFork}></FontAwesomeIcon>
                    
                </div>
                
            </section>
            <footer>{`@2021 bantu_dev`}</footer>
        </div>
    )
}