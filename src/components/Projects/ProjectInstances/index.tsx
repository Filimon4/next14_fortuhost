import { EInstanceTypes } from '@/shared/config/config'
import InstanceRunning from '@/shared/ui/Project/InstanceRunning'
import React from 'react'

import styles from './Projectinstances.module.scss'
import cn from 'classnames'
import InstanceLoading from '@/shared/ui/Project/InstanceLoading'

export enum EProjectInstanceType {
  'running',
  'loading',
  'error'
}

const projectInstances = [
  {
    type: EInstanceTypes.mysql,
    name: "test",
    instance: EProjectInstanceType.running 
  },
  {
    type: EInstanceTypes.mysql,
    name: "test",
    instance: EProjectInstanceType.running 
  },
  {
    type: EInstanceTypes.mysql,
    name: "test",
    instance: EProjectInstanceType.error 
  },
]

const ProjectInstances = () => { 

  return (
    <div className=''>
      <article className={cn(styles.instances, {[styles.instances_loaded]: projectInstances.length>9})}>
        {projectInstances.map((obj, indx) => {
          switch (obj.instance) {
            case EProjectInstanceType.running: {
              return <InstanceRunning key={indx} instanceName={obj.name} instanceType={obj.type} />
            }
            case EProjectInstanceType.loading: {
              return <InstanceLoading key={indx} instanceName={obj.name} instanceType={obj.type} />
            }
            case EProjectInstanceType.error: {
              return <InstanceRunning key={indx} instanceName={obj.name} instanceType={obj.type} />
            }
          } 
        })}
      </article>
    </div>
  )
}

export default ProjectInstances