import React, { useState } from 'react'

export const LocationsMap = ({ articles }) => {
  const [locationId, setlocationId] = useState('lura')

  function handlelocationChange(e) {
    setlocationId(e.target.id)
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center lg:flex-row w-full lg:gap-20 '>
        <div>
          <svg
            className='max-w-[550px] mx-auto w-full'
            version='1.1'
            width='600'
            viewBox='88.98770890547955 163.05588675011543 124.23493465064958 138.03881627849952'
            preserveAspectRatio='xMinYMin'
            id='svg34'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='-4617.270000000001'
              y='-4552.130000000001'
              width='10244.520000000002'
              height='11382.800000000003'
              r='0'
              rx='0'
              ry='0'
              fill='#ffffff'
              stroke='none'
              transform='matrix(0.2928,0,0,0.2928,0,0)'
              stroke-width='0.7070707070707072'
              fill-opacity='0'
              id='rect2'
            ></rect>
            <path
              fill='#0284c7'
              stroke='#ffffff'
              d='M720.3,616.3L720.0999999999999,620.4L724.5999999999999,639.4L725.8999999999999,655L722.2999999999998,661.6L709.1999999999998,674.5L703.6999999999998,681.8L699.1999999999998,691.9L697.4999999999998,699.8L701.9999999999998,754.3L704.8999999999997,770.3L716.7999999999997,805.1999999999999L716.7999999999997,811.8L713.7999999999997,819.5999999999999L708.9999999999998,824.4999999999999L701.4999999999998,829.0999999999999L693.3999999999997,832.4999999999999L665.8999999999997,838.5999999999999L667.9999999999998,849.1999999999999L666.3999999999997,869.4999999999999L670.2999999999997,880.6999999999999L676.5999999999997,883.4999999999999L680.8999999999996,887.9999999999999L688.0999999999997,901.7999999999998L689.8999999999996,907.4999999999999L691.0999999999997,919.7999999999998L692.1999999999997,923.8999999999999L696.1999999999997,927.2999999999998L705.5999999999997,928.7999999999998L709.7999999999997,931.5999999999998L716.4999999999998,941.1999999999998L719.8999999999997,950.3999999999999L719.7999999999997,960.4999999999999L715.7999999999997,972.9999999999999L710.4999999999998,983.1999999999999L703.1999999999998,992.4999999999999L695.0999999999998,997.4999999999999L686.9999999999998,994.8999999999999L684.9999999999998,1009.5999999999999L672.2999999999997,991.0999999999999L669.1999999999997,983.4999999999999L667.7999999999997,973.5999999999999L667.5999999999997,966.1999999999999L668.8999999999996,959.5999999999999L663.6999999999996,960.4999999999999L655.6999999999996,963.1999999999999L648.5999999999996,961.5999999999999L641.7999999999996,959.3999999999999L638.3999999999996,959.6999999999998L634.4999999999997,962.6999999999998L632.3999999999996,963.1999999999998L629.8999999999996,959.8999999999999L627.4999999999997,959.3999999999999L624.3999999999996,960.7999999999998L618.8999999999996,967.8999999999999L615.2999999999996,970.8999999999999L611.1999999999996,972.3999999999999L606.6999999999996,973.2999999999998L598.5999999999996,972.9999999999999L592.3999999999995,970.3999999999999L587.1999999999995,969.6999999999998L582.0999999999995,970.1999999999998L577.4999999999994,971.9999999999998L573.3999999999994,974.4999999999998L564.9999999999994,981.2999999999997L563.2999999999994,983.5999999999997L559.1999999999994,986.0999999999997L555.5999999999993,986.9999999999997L552.0999999999993,988.6999999999997L548.7999999999994,992.4999999999997L506.19999999999936,977.4999999999997L498.4999999999994,971.5999999999997L477.19999999999936,948.5999999999997L461.39999999999935,948.6999999999997L458.29999999999933,953.0999999999997L452.29999999999933,958.8999999999996L448.4999999999993,959.5999999999997L444.9999999999993,957.5999999999997L440.09999999999934,949.5999999999997L436.09999999999934,945.0999999999997L426.59999999999934,939.3999999999996L416.29999999999933,930.4999999999997L414.4999999999993,927.3999999999996L412.8999999999993,921.8999999999996L409.6999999999993,917.3999999999996L408.79999999999933,915.1999999999996L406.79999999999933,906.9999999999995L394.9999999999993,889.2999999999995L384.09999999999934,877.1999999999995L377.4999999999993,871.5999999999995L372.79999999999933,868.7999999999995L366.29999999999933,868.4999999999995L344.09999999999934,850.8999999999995L324.19999999999936,825.7999999999995L319.69999999999936,806.7999999999995L320.09999999999934,801.3999999999995L318.29999999999933,795.6999999999995L315.59999999999934,791.4999999999994L307.19999999999936,781.9999999999994L305.9999999999994,778.8999999999994L306.7999999999994,776.1999999999994L308.4999999999994,774.1999999999994L310.5999999999994,764.7999999999994L309.0999999999994,732.8999999999994L311.3999999999994,720.2999999999994L317.8999999999994,723.0999999999993L324.3999999999994,727.6999999999994L336.5999999999994,730.7999999999994L344.6999999999994,729.6999999999994L354.6999999999994,726.4999999999993L363.49999999999943,721.8999999999993L365.29999999999944,722.9999999999993L368.6999999999994,729.6999999999994L370.8999999999994,731.9999999999993L374.7999999999994,734.5999999999993L386.19999999999936,738.1999999999994L389.7999999999994,736.9999999999993L391.69999999999936,733.8999999999993L392.39999999999935,729.0999999999993L401.09999999999934,722.2999999999994L404.79999999999933,721.4999999999994L410.59999999999934,721.5999999999995L430.19999999999936,725.0999999999995L435.19999999999936,723.5999999999995L438.89999999999935,720.3999999999994L440.9999999999994,716.3999999999994L443.2999999999994,707.2999999999994L445.69999999999936,704.0999999999993L449.89999999999935,701.0999999999993L503.79999999999933,678.9999999999993L508.1999999999993,672.1999999999994L508.5999999999993,667.6999999999994L508.1999999999993,657.1999999999994L505.5999999999993,651.8999999999994L481.49999999999926,630.9999999999994L480.5999999999993,628.3999999999994L481.8999999999993,626.4999999999994L485.4999999999993,625.2999999999994L491.29999999999933,624.7999999999994L498.29999999999933,623.3999999999994L505.1999999999993,620.3999999999994L510.1999999999993,613.7999999999994L517.2999999999993,606.2999999999994L523.4999999999993,601.7999999999994L532.8999999999993,585.9999999999994L532.6999999999992,575.1999999999995L536.7999999999993,580.4999999999994L536.7999999999993,587.9999999999994L537.1999999999992,591.7999999999994L538.7999999999993,595.5999999999993L543.0999999999992,599.2999999999994L549.1999999999992,600.0999999999993L559.3999999999993,597.7999999999994L565.3999999999993,593.8999999999994L569.9999999999993,589.0999999999995L573.1999999999994,583.9999999999994L576.7999999999994,579.6999999999995L584.9999999999994,576.0999999999995L596.2999999999994,577.1999999999995L595.3999999999994,579.5999999999995L598.7999999999994,593.9999999999994L614.4999999999994,617.8999999999994L618.0999999999995,628.7999999999994L617.2999999999995,634.4999999999994L631.0999999999995,632.5999999999995L638.9999999999994,629.6999999999995L644.6999999999995,626.0999999999995L646.9999999999994,622.7999999999995L643.7999999999994,618.2999999999995L643.6999999999994,615.8999999999995L649.8999999999994,614.5999999999996L661.4999999999994,614.1999999999996L696.2999999999994,620.6999999999996L705.4999999999994,618.8999999999996L715.1999999999995,615.7999999999996L720.2999999999995,616.2999999999996Z'
              class='sm_state sm_state_ALB1526'
              opacity='1'
              strokeOpacity='1'
              stroke-width='0'
              strokeLinejoin='round'
              fill-opacity='1'
              id='path22'
              transform='matrix(0.2928,0,0,0.2928,0,0)'
            ></path>
            <desc id='desc28'></desc>
            <defs id='defs30'></defs>

            <g
              onMouseOver={handlelocationChange}
              onClick={handlelocationChange}
              transform='translate(200.5457,192.37338)'
              className='cursor-pointer pointer component'
              id=''
            >
              <circle
                id='rabdisht'
                cx='0'
                cy='0'
                r='1.8'
                opacity='0.8'
                fill='white'
              ></circle>
              <circle
                id='rabdisht'
                cx='0'
                cy='0'
                r='3.5'
                opacity='0.5'
                fill='white'
              ></circle>

              <g class='tooltip' transform='translate(0,0)' opacity='0.9'>
                <foreignObject
                  id='rabdisht'
                  transform='translate(-14,-27)'
                  x='0'
                  y='0'
                  height='25'
                  width='60'
                >
                  <p id='rabdisht' className='popover'>
                    Rabdisht
                  </p>
                </foreignObject>
              </g>
            </g>

            <g
              onMouseOver={handlelocationChange}
              onClick={handlelocationChange}
              transform='translate(160,192.37338)'
              className='cursor-pointer pointer component'
              id=''
            >
              <circle
                id='lura'
                cx='0'
                cy='0'
                r='1.8'
                opacity='0.8'
                fill='white'
              ></circle>
              <circle
                id='lura'
                cx='0'
                cy='0'
                r='3.5'
                opacity='0.5'
                fill='white'
              ></circle>

              <g class='tooltip' transform='translate(0,0)' opacity='0.9'>
                <foreignObject
                  id='lura'
                  transform='translate(-9,-27)'
                  x='0'
                  y='0'
                  height='25'
                  width='60'
                >
                  <p id='lura' className='popover'>
                    Lura
                  </p>
                </foreignObject>
              </g>
            </g>

            <g
              onMouseOver={handlelocationChange}
              onClick={handlelocationChange}
              transform='translate(190,230)'
              className='cursor-pointer pointer component'
              id=''
            >
              <circle
                id='peshkopi'
                cx='0'
                cy='0'
                r='1.8'
                opacity='0.8'
                fill='white'
              ></circle>
              <circle
                id='peshkopi'
                cx='0'
                cy='0'
                r='3.5'
                opacity='0.5'
                fill='white'
              ></circle>

              <g class='tooltip' transform='translate(0,0)' opacity='0.9'>
                <foreignObject
                  id='peshkopi'
                  transform='translate(-13,-27)'
                  x='0'
                  y='0'
                  height='25'
                  width='60'
                >
                  <p id='peshkopi' className='popover'>
                    Peshkopi
                  </p>
                </foreignObject>
              </g>
            </g>
          </svg>
        </div>
        <div className='-mt-10 lg:mt-0 shadow-[0px_-80px_100px_43px_rgba(255,255,255,1)] lg:shadow-none'>
          {articles
            .filter((article) => article.frontmatter.id === locationId)
            .map((article) => (
              <div
                key={article.frontmatter.id}
                className='bg-gray-300/30 backdrop-blur-md rounded-xl text-gray-500 border-gray-300/30 border overflow-hidden'
              >
                <div>
                  <img
                    className='w-full h-[200px] md:h-[300px] object-cover'
                    src={article.frontmatter.img_url}
                    alt={article.frontmatter.title + ' picture'}
                  />
                  <div className='p-6 flex items-center justify-between gap-6'>
                    <div>
                      <h2 className='text-xl font-semibold mb-1'>
                        {article.frontmatter.title}
                      </h2>
                      <p className='text-base text-gray-500 max-w-2xl'>
                        {article.frontmatter.description}
                      </p>
                    </div>

                    <a
                      href={article.url}
                      className='flex justify-center items-center h-[50px] min-w-[50px] rounded-full bg-sky-300/50 text-[35px] font-bold cursor-pointer hover:opacity-80'
                    >
                      <img
                        className='h-5 w-5'
                        src='/icons/right_arrow.svg'
                        alt='icon'
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
