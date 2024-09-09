import { EInstanceTypes } from '@/shared/config/config'
import InstanceRunning from '@/shared/ui/Project/InstanceRunning'
import React from 'react'

import styles from './Projectinstances.module.scss'
import cn from 'classnames'

export enum EProjectInstanceType {
  'running',
  'loading'
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
    instance: EProjectInstanceType.running 
  },
]

const ProjectInstances = () => { 

  return (
    <article className={cn(styles.instances, {[styles.instances_block]: projectInstances.length>9})}>
      
      {projectInstances.map((obj, indx) => {
        if (obj.instance == EProjectInstanceType.running) {
          return <InstanceRunning key={indx} instanceName={obj.name} instanceType={obj.type} />
        }
      })}
    </article>
  )
}

export default ProjectInstances