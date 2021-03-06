/*
 * Copyright 2018 StreamSets Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.streamsets.pipeline.stage.executor.databricks;

import com.streamsets.pipeline.api.ConfigDefBean;
import com.streamsets.pipeline.api.ConfigGroups;
import com.streamsets.pipeline.api.Executor;
import com.streamsets.pipeline.api.GenerateResourceBundle;
import com.streamsets.pipeline.api.PipelineLifecycleStage;
import com.streamsets.pipeline.api.StageDef;
import com.streamsets.pipeline.api.base.configurablestage.DExecutor;

@StageDef(
    version = 1,
    label = "Databricks Job Launcher",
    description = "Execute Jobs on Databricks Cloud",
    icon = "spark-logo-hd.png",
    upgraderDef = "upgrader/DatabricksJobLauncherDExecutor.yaml",
    onlineHelpRefUrl ="",
    producesEvents = true
)
@ConfigGroups(Groups.class)
@GenerateResourceBundle
@PipelineLifecycleStage
public class DatabricksJobLauncherDExecutor extends DExecutor {

  @ConfigDefBean
  public DatabricksConfigBean conf = new DatabricksConfigBean();

  @Override
  protected Executor createExecutor() {
    return new DatabricksJobExecutor(conf);
  }
}
