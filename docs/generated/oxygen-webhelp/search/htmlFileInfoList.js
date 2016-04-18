fil = new Array();
fil["0"]= "Administration/Administration_title.html@@@Administration@@@...";
fil["1"]= "Administration/CLI-Overview.html@@@Command Line Interface@@@Use the help command to view additional information for the specified command...";
fil["2"]= "Administration/RESTResponse.html@@@REST Response@@@You can view REST response JSON data for different aspects of the Data Collector, such as pipeline configuration information or monitoring details...";
fil["3"]= "Administration/Restarting.html@@@Restarting Data Collector@@@You can restart Data Collector to apply changes to the Data Collector configuration file, environment configuration file, or user logins. During the restart process, Data Collector shuts down and then...";
fil["4"]= "Administration/ShuttingDown.html@@@Shutting Down Data Collector@@@You can shut down and then manually launch Data Collector to apply changes to the Data Collector configuration file, environment configuration file, or user logins. To use the command line for shut...";
fil["5"]= "Administration/ViewingDCConfigs.html@@@Viewing Data Collector Configuration Properties@@@To view Data Collector configuration properties, click Administration &gt; Configuration . For details about the configuration properties or to edit the configuration file, see Configuring Data Collector...";
fil["6"]= "Administration/ViewingDirectories.html@@@Viewing Data Collector Directories@@@You can view the directories that the Data Collector uses. You might check the directories being used to access a file in the directory or to increase the amount of available space for a directory...";
fil["7"]= "Administration/ViewingJVMMetrics.html@@@Viewing JVM Metrics@@@The Data Collector provides JVM metrics for the Data Collector...";
fil["8"]= "Administration/ViewingLogData.html@@@Viewing Data Collector Logs@@@You can view and download log data. When you download log data, you can select the file to download. To view log data for the Data Collector , click Administration &gt; Logs . The console displays...";
fil["9"]= "Advanced_Config/AdvancedPipelineConfig-title.html@@@Advanced Configuration@@@...";
fil["10"]= "Advanced_Config/RuntimeProperties.html@@@Runtime Properties@@@Runtime properties are properties that you define in a file local to the Data Collector and call from within a pipeline. With runtime properties, you can define different sets of values for different Data Collectors...";
fil["11"]= "Advanced_Config/RuntimeResources.html@@@Runtime Resources@@@Similar to runtime properties, runtime resources are values that you define in a file local to the Data Collector and call from within a pipeline. But with runtime resources, you can restrict the permissions for the files to secure sensitive information. Use runtime resources to load sensitive information from files at runtime...";
fil["12"]= "Alerts/DataAlerts.html@@@Data Rules and Alerts@@@Data rules define the information that you want to see about the data that passes between stages. You can create data rules based on any link in the pipeline. You can also enable metrics and create alerts for data rules...";
fil["13"]= "Alerts/DataDriftAlerts.html@@@Data Drift Rules and Alerts@@@Data drift alerts trigger when a change of the specified type occurs from record to record...";
fil["14"]= "Alerts/EmailforAlerts-Configuring.html@@@Configuring Email for Alerts@@@You can define the email addresses to receive metric and data alerts. When an alert triggers an email, the Data Collector sends an email to every address in the list...";
fil["15"]= "Alerts/MetricAlerts.html@@@Metric Rules and Alerts@@@Create a custom metric rule to receive alerts when a real-time statistic reaches a certain threshold. You can create metric rules and alerts when you configure or monitor a pipeline. You can edit or delete metric rules when they are not enabled...";
fil["16"]= "Alerts/RulesAlerts-Overview.html@@@Rules and Alerts@@@Define rules to enable the Data Collector to capture information about a running pipeline. Enable the alert associated with a rule to be notified when the specified condition occurs...";
fil["17"]= "Alerts/RulesAlerts_title.html@@@Rules and Alerts@@@...";
fil["18"]= "Apx-DataFormats/DataFormat_Overview.html@@@Data Format Support@@@The following table lists the data formats supported by each destination...";
fil["19"]= "Apx-DataFormats/DataFormat_Title.html@@@Data Formats by Stage@@@...";
fil["20"]= "Apx-GrokPatterns/DateTimePatterns.html@@@Date and Time Grok Patterns@@@You can use the following date and time grok patterns to define the structure of log data: MONTH...";
fil["21"]= "Apx-GrokPatterns/GeneralPatterns.html@@@General Grok Patterns@@@You can use the following general grok patterns to define the structure of log data: USER %{USERNAME} USERNAME [a-zA-Z0-9._-]+ BASE10NUM (?&lt;![0-9.+-])(?&gt;[+-]?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9...";
fil["22"]= "Apx-GrokPatterns/GrokPatterns.html@@@Defining Grok Patterns@@@You can use the grok patterns in this appendix to define the structure of log dat...";
fil["23"]= "Apx-GrokPatterns/GrokPatterns_title.html@@@Grok Patterns@@@...";
fil["24"]= "Apx-GrokPatterns/JavaPatterns.html@@@Java Grok Patterns@@@You can use the following Java-related grok patterns to define the structure of log data: JAVACLASS (?:[a-zA-Z$_][a-zA-Z$_0-9]*\\.)*[a-zA-Z$_][a-zA-Z$_0-9]* JAVAFILE (?:[A-Za-z0-9_. -]+) A space...";
fil["25"]= "Apx-GrokPatterns/LogPatterns.html@@@Log Grok Patterns@@@You can use the following log-related grok patterns to define the structure of log data: SYSLOGTIMESTAMP %{MONTH} +%{MONTHDAY} %{TIME} PROG (?:[\\w._/%-]+) SYSLOGPROG...";
fil["26"]= "Apx-GrokPatterns/NetworkingPatterns.html@@@Networking Grok Patterns@@@You can use the following networking-related grok patterns to define the structure of log data: MAC (?:%{CISCOMAC}|%{WINDOWSMAC}|%{COMMONMAC}) CISCOMAC (?:(?:[A-Fa-f0-9]{4}\\.){2}[A-Fa-f0-9]{4...";
fil["27"]= "Apx-GrokPatterns/PathPatterns.html@@@Path Grok Patterns@@@You can use the following path grok patterns to define the structure of log data: PATH (?:%{UNIXPATH}|%{WINPATH}) UNIXPATH (?&gt;/(?&gt;[\\w_%!$@:.,~-]+|\\\\.)*)+ TTY...";
fil["28"]= "Apx-RegEx/Examples.html@@@Regex Examples@@@Masking credit card numbers, except for one group You can use the following regular expression in the Field Masker to mask all numbers in a credit or debit card except for the last 4 digits...";
fil["29"]= "Apx-RegEx/QuickReference.html@@@Quick Reference@@@The following table includes some details you might find helpful when creating a regular expression: Character Description Examples [ ] Use brackets to define character classes. [0-9][0-9][0-9...";
fil["30"]= "Apx-RegEx/RegEx-Overview.html@@@Regular Expressions@@@A regular expression, also known as regex, describes a pattern for a string...";
fil["31"]= "Apx-RegEx/RegEx-Title.html@@@Regular Expressions@@@...";
fil["32"]= "Apx-RegEx/Regex-inthePipeline.html@@@Regular Expressions in the Pipeline@@@Though generally not required, you can use Java-based regular expressions at various locations within a pipeline to define, search for, or manipulate strings...";
fil["33"]= "Cluster_Mode/ClusterPipelines.html@@@Cluster Pipelines@@@A cluster pipeline is a pipeline that runs in cluster execution mode. You can run a pipeline in standalone execution mode or cluster execution mode...";
fil["34"]= "Cluster_Mode/ClusterPipelines_title.html@@@Cluster Pipelines@@@...";
fil["35"]= "Cluster_Mode/HDFSRequirements.html@@@HDFS Requirements@@@Use the following requirements to configure a cluster mode pipeline to read from HDFS: Install HDFS. Install the Data Collector on the YARN gateway node. In the pipeline properties, on the General...";
fil["36"]= "Cluster_Mode/KafkaRequirements.html@@@Kafka Requirements@@@Use the following requirements to configure a cluster mode pipeline to read from a Kafka cluster: Verify the installation of Kafka, Spark Streaming, and either YARN or Mesos as the cluster manager...";
fil["37"]= "Data_Preview/DataCollectorWindow-Preview.html@@@Data Collector Console - Preview Mode@@@You can use the Data Collector console to view how data passes through the pipeline...";
fil["38"]= "Data_Preview/DataPreview.html@@@Data Preview@@@You can preview complete and incomplete pipelines. The Data Preview icon becomes active when data preview is available...";
fil["39"]= "Data_Preview/DataPreview_Title.html@@@Data Preview@@@...";
fil["40"]= "Data_Preview/EditingPreviewData.html@@@Editing Preview Data@@@You can edit preview data to view how a stage or group of stages processes the changed data. Edit preview data to test for data conditions that might not appear in the preview data set...";
fil["41"]= "Data_Preview/EditingProperties.html@@@Editing Properties@@@In data preview, you can edit stage properties to see how the changes affect preview data. For example, you might edit the expression in an Expression Evaluator to see how the expression alters dat...";
fil["42"]= "Data_Preview/PreviewingMultipleStages.html@@@Previewing Multiple Stages@@@You can preview data for a group of linked stages within a pipeline...";
fil["43"]= "Data_Preview/PreviewingaSingleStage.html@@@Previewing a Single Stage@@@You can preview data for a single stage. In the Preview panel, you can review the values for each record to determine if the stage transforms data as expected. Above the pipeline canvas, click the...";
fil["44"]= "Destinations/AmazonS3.html@@@Amazon S3@@@The Amazon S3 destination writes data to Amazon S3. To write data to an Amazon Kinesis Firehose delivery system, use the Kinesis Firehose destination. To write data to Amazon Kinesis Streams, use the Kinesis Producer destination...";
fil["45"]= "Destinations/Cassandra.html@@@Cassandra@@@Due to Cassandra requirements, the data types of the incoming fields must match the data types of the corresponding Cassandra columns. When appropriate, use a Type Converter processor earlier in the pipeline to convert data types...";
fil["46"]= "Destinations/Destinations-title.html@@@Destinations@@@...";
fil["47"]= "Destinations/Destinations_overview.html@@@Destinations@@@A destination stage represents the target for a pipeline. You can use one or more destinations in a pipeline...";
fil["48"]= "Destinations/Elasticsearch.html@@@Elasticsearch@@@When appropriate, you can specify the expression that defines the document ID. When you do not specify an expression, Elasticsearch generates IDs for each document...";
fil["49"]= "Destinations/Flume.html@@@Flume@@@The Flume destination writes data to a Flume source. When you write data to Flume, you pass data to a Flume client. The Flume client passes data to hosts based on client configuration properties...";
fil["50"]= "Destinations/HBase.html@@@HBase@@@You can configure the destination to use an HBase user to write data to HBase...";
fil["51"]= "Destinations/HadoopFS-destination.html@@@Hadoop FS@@@You can define a time limit for records to be written to its associated output directory. Any record that arrives past this limit is considered late. This limit is appropriate when you use the time of the record as the time basis...";
fil["52"]= "Destinations/Hive.html@@@Hive Streaming@@@The Hive Streaming destination writes data to Hive tables stored in the ORC (Optimized Row Columnar) file format...";
fil["53"]= "Destinations/InfluxDB.html@@@InfluxDB@@@The InfluxDB destination writes data to an InfluxDB database...";
fil["54"]= "Destinations/JDBCProducer.html@@@JDBC Producer@@@Configure the JDBC Producer to use JDBC to write data to a database table...";
fil["55"]= "Destinations/KProducer.html@@@Kafka Producer@@@You can add custom Kafka configuration properties to the Kafka Producer...";
fil["56"]= "Destinations/KinFirehose.html@@@Kinesis Firehose@@@The Kinesis Firehose destination writes data to an existing delivery stream in Amazon Kinesis Firehose. Before using the Kinesis Firehose destination, use the AWS Management Console to create a delivery stream to an Amazon S3 bucket or Amazon Redshift table...";
fil["57"]= "Destinations/KinProducer.html@@@Kinesis Producer@@@The Kinesis Producer destination writes data to Amazon Kinesis Streams. To write data to an Amazon Kinesis Firehose delivery system, use the Kinesis Firehose destination. To write data to Amazon S3, use the Amazon S3 destination...";
fil["58"]= "Destinations/Kudu.html@@@Kudu@@@The Kudu destination writes data to a Kudu cluster...";
fil["59"]= "Destinations/LocalFS.html@@@Local FS@@@You can define a time limit for records to be written to its associated output directory. Any record that arrives past this limit is considered late. This limit is appropriate when you use the time of the record as the time basis...";
fil["60"]= "Destinations/MapRFS.html@@@MapR FS@@@You can define a time limit for records to be written to its associated output directory. Any record that arrives past this limit is considered late. This limit is appropriate when you use the time of the record as the time basis...";
fil["61"]= "Destinations/MapRStreamsProd.html@@@MapR Streams Producer@@@The MapR Streams Producer destination writes messages to MapR Streams...";
fil["62"]= "Destinations/MongoDB.html@@@MongoDB@@@Configure a MongoDB destination to write to MongoDB...";
fil["63"]= "Destinations/RabbitMQ.html@@@RabbitMQ Producer@@@RabbitMQ Producer writes AMQP messages to a single RabbitMQ queue...";
fil["64"]= "Destinations/SDC_RPCdest.html@@@SDC RPC@@@The SDC RPC destination compresses data by default when passing data to an SDC RPC origin. When necessary, you can disable compression in the destination...";
fil["65"]= "Destinations/Solr.html@@@Solr@@@The index mode determines how the Solr destination indexes records when writing to Solr. Index mode also determines how the destination handles errors...";
fil["66"]= "Destinations/ToError.html@@@To Error@@@The To Error destination passes records to the pipeline for error handling. Use the To Error destination to send a stream of records to pipeline error handling...";
fil["67"]= "Destinations/Trash.html@@@Trash@@@The Trash destination discards records. Use the Trash destination as a visual representation of records discarded from the pipeline. Or, you might use the Trash destination during development as a temporary placeholder...";
fil["68"]= "Expression_Language/Constants.html@@@Constants@@@The expression language provides constants for use in expressions. In a pipeline, you can also create constants for use within the pipeline...";
fil["69"]= "Expression_Language/ExpressionLanguage_overview.html@@@Expression Language@@@The StreamSets expression language enables you to create expressions that evaluate or modify data. The StreamSets expression language is based on the JSP 2.0 expression language. Use the expression...";
fil["70"]= "Expression_Language/ExpressionLanguage_title.html@@@Expression Language@@@...";
fil["71"]= "Expression_Language/Functions.html@@@Functions@@@Use string functions to transform string dat...";
fil["72"]= "Expression_Language/Literals.html@@@Literals@@@The expression language includes the following literals...";
fil["73"]= "Expression_Language/Operators.html@@@Operators@@@The precedence of operators highest to lowest, left to right is as follows...";
fil["74"]= "Expression_Language/ReservedWords.html@@@Reserved Words@@@The following words are reserved for the expression language and should not be used as identifiers...";
fil["75"]= "Getting_Started/DCollector_Window.html@@@Data Collector Console@@@Data Collector provides a console to configure pipelines, preview data, monitor pipelines, and review snapshots of dat...";
fil["76"]= "Getting_Started/GettingStarted_Title.html@@@Getting Started@@@...";
fil["77"]= "Getting_Started/LoggingIn_CreatingPipeline.html@@@Logging In and Creating a Pipeline@@@After you start Data Collector, you can log in to the Data Collector console and create your first pipeline...";
fil["78"]= "Getting_Started/What_is_DataCollector.html@@@What is StreamSets Data Collector?@@@Let s walk through it...";
fil["79"]= "Glossary/GlossaryOfTerms.html@@@Glossary of Terms@@@batch A set of records that passes through a pipeline. Data Collector processes data in batches. cluster execution mode Pipeline execution mode that allows you to process large volumes of data from...";
fil["80"]= "Glossary/Glossary_title.html@@@Glossary@@@...";
fil["81"]= "Install_Config/AdditionalDrivers.html@@@Additional Drivers@@@You can install additional drivers for stages...";
fil["82"]= "Install_Config/Authentication.html@@@Data Collector Authentication@@@StreamSets Data Collector can authenticate user accounts based on files or LDAP. Best practice is to use LDAP if your organization has it. By default, Data Collector uses file authentication...";
fil["83"]= "Install_Config/BasicInstall_Overview.html@@@Basic Installation with Custom Libraries@@@Use the command line to install additional libraries to use stages that are not included in the basic installation. This is an optional step, but generally you ll want to install additional libraries to process dat...";
fil["84"]= "Install_Config/CMInstall-Overview.html@@@Installation with Cloudera Manager@@@You can use Cloudera Manager to easily install Data Collector across the cluster as an add-on service. To install Data Collector through Cloudera Manager, perform the following steps: Install the...";
fil["85"]= "Install_Config/DCConfig.html@@@Data Collector Configuration@@@You can use Kerberos authentication to connect to origin and destination systems, as well as YARN clusters...";
fil["86"]= "Install_Config/DCEnvironmentConfig.html@@@Data Collector Environment Configuration@@@Data Collector provides two environment configuration files: $SDC_DIST/libexec/sdc-env.sh - Used when you start Data Collector manually from the command line. $SDC_DIST/libexec/sdcd-env.sh - Used when...";
fil["87"]= "Install_Config/Install_Config_title.html@@@Installation and Configuration@@@...";
fil["88"]= "Install_Config/InstallationAndConfig.html@@@Installation@@@You can install Data Collector and start it manually or run it as a service...";
fil["89"]= "Install_Config/Installing_the_DC-Docker.html@@@Run Data Collector from Docker@@@You can run the Data Collector image from Docker Hub...";
fil["90"]= "Install_Config/Installing_the_DC-Service.html@@@Full Installation and Launch (Service Start)@@@To install the full Data Collector as a service, you can download the Data Collector RPM package or the Data Collector tarball. Installing the full Data Collector as a service requires sudo privileges...";
fil["91"]= "Install_Config/Installing_the_DC.html@@@Full Installation and Launch (Manual Start)@@@To install the full Data Collector and start it manually, download the Data Collector tarball...";
fil["92"]= "Install_Config/JMXMetrics-EnableExternalTools.html@@@Enabling External JMX Tools@@@Data Collector uses JMX metrics to generate the graphical display of the status of a running pipeline. You can provide the same JMX metrics to external tools if desired...";
fil["93"]= "Install_Config/MapR-Prerequisites.html@@@MapR Prerequisites@@@Due to licensing restrictions, StreamSets cannot distribute MapR libraries with Data Collector . As a result, you must perform additional steps to enable the Data Collector machine to connect to MapR...";
fil["94"]= "Origins/AmazonS3.html@@@Amazon S3@@@The Amazon S3 origin uses a buffer to read files into memory to produce records. The size of the buffer determines the maximum size of the record that can be processed...";
fil["95"]= "Origins/Directory.html@@@Directory@@@Configure a Directory origin to read data from files in a directory...";
fil["96"]= "Origins/FileTail.html@@@File Tail@@@When you use an origin to read log data, you define the format of the log files to be read...";
fil["97"]= "Origins/HTTPClient.html@@@HTTP Client@@@The HTTP Client origin processes data differently based on the data format. The origin processes the following types of dat...";
fil["98"]= "Origins/HadoopFS-origin.html@@@Hadoop FS@@@You can configure the Hadoop FS origin to use an HDFS user to read data from HDFS...";
fil["99"]= "Origins/JDBCConsumer.html@@@JDBC Consumer@@@When reading from Microsoft SQL Server, JDBC Consumer can group row updates from the same transaction when reading from a change log table. This maintains consistency when performing change data capture...";
fil["100"]= "Origins/JMS.html@@@JMS Consumer@@@Configure a JMS Consumer origin to read JMS messages...";
fil["101"]= "Origins/KConsumer.html@@@Kafka Consumer@@@Configure a Kafka Consumer to read data from a Kafka cluster...";
fil["102"]= "Origins/KinConsumer.html@@@Kinesis Consumer@@@You can configure the read interval for the Kinesis Consumer. The read interval determines how long Kinesis Consumer waits before requesting additional data from Kinesis shards. By default, the Kinesis Consumer waits one second between requests...";
fil["103"]= "Origins/MapRStreamsCons-DataFormats.html@@@Data Formats@@@The MapR Streams Consumer processes data differently based on the data format. MapR Streams Consumer can process the following types of data: Avro Generates a record for every message. To ensure...";
fil["104"]= "Origins/MapRStreamsCons.html@@@MapR Streams Consumer@@@Configure a MapR Streams Consumer to read messages from MapR Streams...";
fil["105"]= "Origins/MongoDB.html@@@MongoDB@@@You can configure the read preference that the MongoDB origin uses. The read preference determines how the origin reads data from different members of the MongoDB replica set...";
fil["106"]= "Origins/Omniture.html@@@Omniture@@@The Omniture origin processes JSON website usage reports generated by the Omniture reporting APIs. Omniture is also known as the Adobe Marketing Cloud...";
fil["107"]= "Origins/Origins_overview.html@@@Origins@@@You can preview raw source data for Directory, File Tail, and Kafka Consumer origins. Preview raw source data when reviewing the data might help with origin configuration...";
fil["108"]= "Origins/Origins_title.html@@@Origins@@@...";
fil["109"]= "Origins/RabbitMQ.html@@@RabbitMQ Consumer@@@Configure a RabbitMQ Consumer to read messages from a RabbitMQ queue...";
fil["110"]= "Origins/SDC_RPCorigin.html@@@SDC RPC@@@The SDC RPC origin enables connectivity between two SDC RPC pipelines. The SDC RPC origin reads data passed from an SDC RPC destination. Use the SDC RPC origin as part of an SDC RPC destination pipeline...";
fil["111"]= "Origins/UDP.html@@@UDP Source@@@The UDP Source origin reads messages from one or more UDP ports. UDP Source generates a record for every message. UDP Source can read syslog messages, Netflow messages from NetFlow Version 5, and collectd messages...";
fil["112"]= "Pipeline_Configuration/ConfiguringAPipeline.html@@@Configuring a Pipeline@@@Configure a pipeline to define the stream of data. After you configure the pipeline, you can start the pipeline...";
fil["113"]= "Pipeline_Configuration/DataCollectorWindow-Config.html@@@Data Collector Console - Edit Mode@@@The following image shows the Data Collector console when you configure a pipeline: Area / Icon Name Description 1 Pipeline canvas Displays the pipeline. Use to configure the pipeline data flow. 2...";
fil["114"]= "Pipeline_Configuration/ErrorHandling.html@@@Error Record Handling@@@You can configure error record handling at a stage level and at a pipeline level...";
fil["115"]= "Pipeline_Configuration/Expressions.html@@@Expression Configuration@@@Use the following information and tips when you invoke expression completion...";
fil["116"]= "Pipeline_Configuration/PipelineConfiguration_title.html@@@Pipeline Configuration@@@...";
fil["117"]= "Pipeline_Configuration/PipelineConstants.html@@@Pipeline Constants@@@A pipeline constant is a constant that you define for the pipeline and that you can use in any stage in the pipeline. Define a pipeline constant when you have a constant that you want to update easily or to use more than once...";
fil["118"]= "Pipeline_Configuration/PipelineMemory.html@@@Pipeline Memory@@@Data Collector uses memory when it runs a pipeline. To avoid causing out-of-memory errors on the host machine, you can configure the maximum amount of memory that can be used for the pipeline...";
fil["119"]= "Pipeline_Configuration/Retry.html@@@Retrying the Pipeline@@@By default, when Data Collector encounters a stage-level error that might cause a standalone pipeline to fail, it retries the pipeline. That is, it waits a period of time, and then tries again to run the pipeline...";
fil["120"]= "Pipeline_Configuration/Validation.html@@@Implicit and Explicit Validation@@@Data Collector performs two types of validation: Implicit validation Implicit validation occurs by default as the Data Collector console saves your changes. Implicit validation lists missing or...";
fil["121"]= "Pipeline_Design/ControlCharacters.html@@@Control Character Removal@@@You can use several stages to remove control characters - such as escape or end-of-transmission characters - from data. Remove control characters to avoid creating invalid records...";
fil["122"]= "Pipeline_Design/DatainMotion.html@@@Data in Motion@@@When you configure a pipeline, you define how you want data to be treated: Do you want to prevent the loss of data or the duplication of dat...";
fil["123"]= "Pipeline_Design/DelimitedDataRootFieldTypes.html@@@Delimited Data Root Field Type@@@When reading delimited data, Data Collector can create records that use the list or list-map root field type. When Data Collector creates records for delimited data, it creates a single root field of...";
fil["124"]= "Pipeline_Design/DesigningDataFlow.html@@@Designing the Data Flow@@@When you connect a stage to multiple stages, all data passes to all connected stages. You can configure required fields for a stage to discard records before they enter the stage, but by default all records are passed...";
fil["125"]= "Pipeline_Design/DevStages.html@@@Development Stages@@@The Data Collector provides several development stages that you can use to help develop or test pipelines. Note: Do not use development stages in production pipelines. You can use the following...";
fil["126"]= "Pipeline_Design/DroppingUnwantedRecords.html@@@Dropping Unwanted Records@@@Preconditions are conditions that a record must satisfy to enter the stage for processing. Like required fields, if a record does not meet a precondition, it is diverted to the pipeline for error handling. You can define preconditions for any processor and most destination stages...";
fil["127"]= "Pipeline_Design/PipelineDesign_title.html@@@Pipeline Concepts and Design@@@...";
fil["128"]= "Pipeline_Design/Protobuf-Prerequisites.html@@@Protobuf Data Format Prerequisites@@@Perform the following prerequisites before reading or writing protobuf dat...";
fil["129"]= "Pipeline_Design/SDCRecordFormat.html@@@SDC Record Data Format@@@SDC Record is a proprietary data format that Data Collector uses to generate error records. Data Collector can also use the data format to read and write dat...";
fil["130"]= "Pipeline_Design/What_isa_Pipeline.html@@@What is a Pipeline?@@@A pipeline describes the flow of data from the origin system to destination systems and defines how to transform the data along the way...";
fil["131"]= "Pipeline_Maintenance/DeletingAPipeline.html@@@Deleting a Pipeline@@@You can delete a pipeline when you no longer need it. Deleting a pipeline is permanent. To keep a back up, export the pipeline before you delete it. From the Home page, click the More icon for the...";
fil["132"]= "Pipeline_Maintenance/DuplicatingAPipeline.html@@@Duplicating a Pipeline@@@Duplicate a pipeline when you want to keep the existing version of a pipeline while continuing to configure a duplicate version. A duplicate is an exact copy of the original pipeline...";
fil["133"]= "Pipeline_Maintenance/ExportingAPipeline.html@@@Exporting a Pipeline@@@Export a pipeline to create a backup or to use the pipeline with another Data Collector...";
fil["134"]= "Pipeline_Maintenance/ImportingAPipeline.html@@@Importing a Pipeline@@@Import a pipeline to use a pipeline developed on a different Data Collector or to restore a backup file. Import a pipeline from a pipeline file. Pipeline files are JSON files exported from a Dat...";
fil["135"]= "Pipeline_Maintenance/PipelineMaintenance_title.html@@@Pipeline Maintenance@@@...";
fil["136"]= "Pipeline_Maintenance/StartingAPipeline.html@@@Starting a Pipeline@@@You can start a pipeline when it is valid. When you start a pipeline, the Data Collector runs the pipeline until you stop the pipeline or shut down the Data Collector...";
fil["137"]= "Pipeline_Maintenance/StoppingAPipeline.html@@@Stopping a Pipeline@@@Stop a pipeline when you want the Data Collector to stop processing data for the pipeline...";
fil["138"]= "Pipeline_Monitoring/DataCollectorWindow-Monitor.html@@@Data Collector Console - Monitor Mode@@@In Monitor mode, you can use the Data Collector console to view data as it passes through the pipeline...";
fil["139"]= "Pipeline_Monitoring/MonitoringErrors.html@@@Monitoring Errors@@@You can view the errors related to each stage. Stage-related errors include the error records that the stage produces and other errors encountered by the stage...";
fil["140"]= "Pipeline_Monitoring/PipelineMonitoring.html@@@Pipeline Monitoring@@@When the Data Collector runs a pipeline, you can view real-time statistics about the pipeline, examine a sample of the data being processed, and create rules and alerts...";
fil["141"]= "Pipeline_Monitoring/PipelineMonitoring_title.html@@@Pipeline Monitoring@@@...";
fil["142"]= "Pipeline_Monitoring/Snapshots.html@@@Snapshots@@@A snapshot is a set of data captured as it moves through a running pipeline. You can capture snapshots when you monitor a pipeline...";
fil["143"]= "Pipeline_Monitoring/ViewingPipelineStageStatistics.html@@@Viewing Pipeline and Stage Statistics@@@When you monitor a pipeline, you can view real-time summary and error statistics for the pipeline and for stages in the pipeline...";
fil["144"]= "Pipeline_Monitoring/ViewingtheRunHistory.html@@@Viewing the Run History@@@You can view a run summary for each run of the pipeline when you view the pipeline history...";
fil["145"]= "Processors/Base64Decoder.html@@@Base64 Field Decoder@@@The Base64 Field Decoder decodes Base64 encoded data to binary data. Use the processor to decode Base64 encoded data before evaluating data in the field...";
fil["146"]= "Processors/Base64Encoder.html@@@Base64 Field Encoder@@@The Base64 Field Encoder encodes binary data using Base64. Use the processor to encode binary data that must be sent over channels that expect ASCII dat...";
fil["147"]= "Processors/Expression.html@@@Expression Evaluator@@@You can use expressions to add or modify header attributes for a record...";
fil["148"]= "Processors/FieldConverter.html@@@Field Converter@@@The following table lists the data types that can be converted to another data type. Byte Array, List, and Map data types cannot be converted...";
fil["149"]= "Processors/FieldHasher.html@@@Field Hasher@@@Field Hasher provides several methods to hash data. When you hash a field more than once, Field Hasher uses the existing hash when generating the next hash...";
fil["150"]= "Processors/FieldMasker.html@@@Field Masker@@@You can use the following mask types to mask dat...";
fil["151"]= "Processors/FieldMerger.html@@@Field Merger@@@The Field Merger merges one or more fields in a record to a different location in the record. Use only for records with a list or map structure...";
fil["152"]= "Processors/FieldRemover.html@@@Field Remover@@@The Field Remover removes fields from records. Use the Field Remover to discard field data that you do not need in the pipeline. You configure the Field Remover to complete one of the following...";
fil["153"]= "Processors/FieldRenamer.html@@@Field Renamer@@@Use the Field Renamer to rename fields in a record...";
fil["154"]= "Processors/FieldSplitter.html@@@Field Splitter@@@The Field Splitter splits string data based on a separator character and passes the separated data to new fields. Use the Field Splitter to split complex string values into logical components...";
fil["155"]= "Processors/GeoIP.html@@@Geo IP@@@The Geo IP processor provides geographic location information for IP addresses. The Geo IP processor uses the MaxMind GeoIP2 database file to provide geolocation information. You must provide your own copy of the database file...";
fil["156"]= "Processors/Groovy.html@@@Groovy Evaluator@@@In scripts that process list-map data, treat the data as maps...";
fil["157"]= "Processors/JSONParser.html@@@JSON Parser@@@Configure a JSON Parser to parse a JSON object in a String field...";
fil["158"]= "Processors/JavaScript.html@@@JavaScript Evaluator@@@In scripts that process list-map data, treat the data as maps...";
fil["159"]= "Processors/Jython.html@@@Jython Evaluator@@@In scripts that process list-map data, treat the data as maps...";
fil["160"]= "Processors/LogParser.html@@@Log Parser@@@When you use Log Parser to parse log data, you define the format of the log files to be read...";
fil["161"]= "Processors/Processors_overview.html@@@Processors@@@A processor stage represents a type of data processing that you want to perform. You can use as many processors in a pipeline as you need...";
fil["162"]= "Processors/Processors_title.html@@@Processors@@@...";
fil["163"]= "Processors/RDeduplicator.html@@@Record Deduplicator@@@The Record Deduplicator caches record information for comparison until it reaches a specified number of records. Then, it discards the information in the cache and starts over...";
fil["164"]= "Processors/StreamSelector.html@@@Stream Selector@@@A condition defines the data that passes to the associated stream. All records that meet the condition pass to the stream. Use the expression language to define conditions...";
fil["165"]= "Processors/ValueReplacer.html@@@Value Replacer@@@The Value Replacer replaces null values in a field with a constant. The Value Replacer can also replace existing values in a field with Nulls...";
fil["166"]= "Processors/XMLParser.html@@@XML Parser@@@Configure an XML Parser to parse XML data in a string field...";
fil["167"]= "RPC_Pipelines/ConfiguringDeliveryGuarantee.html@@@Configuring the Delivery Guarantee@@@The delivery guarantee determines when a pipeline commits the offset. When configuring the delivery guarantee for SDC RPC pipelines, use the same option in origin and destination pipelines...";
fil["168"]= "RPC_Pipelines/ConfiguringSDCRPCPipelines.html@@@Configuration Guidelines for SDC RPC Pipelines@@@To create a valid set of SDC RPC pipelines, some configuration options must be aligned. Use the following guidelines to configure SDC RPC pipelines: origin pipeline In the origin pipeline, configure...";
fil["169"]= "RPC_Pipelines/Deployment_Architecture.html@@@Deployment Architecture@@@When using SDC RPC pipelines, consider your needs and environment carefully as you design the deployment architecture...";
fil["170"]= "RPC_Pipelines/EnablingEncryption.html@@@Enabling Encryption@@@You can enable SDC RPC pipelines to transfer data securely using TLS. To use TLS, enable TLS in both the SDC RPC destination and the SDC RPC origin...";
fil["171"]= "RPC_Pipelines/RPC_ID.html@@@Defining the RPC ID@@@The RPC ID is a user-defined identifier that allows an SDC RPC origin and SDC RPC destination to recognize each other...";
fil["172"]= "RPC_Pipelines/SDC_RPCpipeline.html@@@SDC RPC Pipelines@@@Data Collector Remote Protocol Call pipelines, a.k.a. SDC RPC pipelines, are a set of StreamSets pipelines that pass data from one pipeline to another without writing to an intermediary system...";
fil["173"]= "RPC_Pipelines/SDC_RPCpipelines_title.html@@@SDC RPC Pipelines@@@...";
fil["174"]= "Troubleshooting/AccessingErrorMessages.html@@@Accessing Error Messages@@@Informational and error messages display in different location based on the type of information: Pipeline configuration issues The Data Collector console provides guidance and error details in the...";
fil["175"]= "Troubleshooting/ClusterMode.html@@@Cluster Execution Mode@@@Use the following tips for help with pipelines in cluster mode: I got the following validation error when configuring a cluster pipeline. What does it mean? Validation_0071 - Stage  &lt;stage id&gt;  does...";
fil["176"]= "Troubleshooting/Destinations.html@@@Destinations@@@Use the following tips for help with destination stages and systems. Why is the pipeline failing entire batches when only a few records have a problem? Due to Cassandra requirements, when you write to...";
fil["177"]= "Troubleshooting/Monitoring.html@@@Monitoring@@@Use the following tips for help with monitoring the pipeline...";
fil["178"]= "Troubleshooting/Origins.html@@@Origins@@@Use the following tips for help with origin stages and systems. Why isn t the Directory origin reading all of my files? Directory reads files based on their file name pattern in lexicographic...";
fil["179"]= "Troubleshooting/Performance.html@@@Performance@@@Use the following tips for help with performance: Why is my batch size only 1000 records when I configured my origin for larger batches? The Data Collector maximum batch size overrides the maximum...";
fil["180"]= "Troubleshooting/PipelineBasics.html@@@Pipeline Basics@@@Use the following tips for help with pipeline basics: When I go to the Data Collector console, I get a  Webpage not available  error message. The Data Collector is not running. Start the Dat...";
fil["181"]= "Troubleshooting/Troubleshooting_title.html@@@Troubleshooting@@@...";
fil["182"]= "Tutorial/BasicTutorial.html@@@Basic Tutorial@@@Now before we run the basic pipeline, let s add a data rule and alert. Data rules are user-defined rules used to inspect data moving between two stages. They are a powerful way to look for outliers and anomalous dat...";
fil["183"]= "Tutorial/BeforeYouBegin.html@@@Before You Begin@@@Before you start this tutorial, you ll need to do a few things: Download sample data. You can download sample data from the following location...";
fil["184"]= "Tutorial/ExtendedTutorial.html@@@Extended Tutorial@@@Now that the extended pipeline is complete, let s reset the origin and run the pipeline again...";
fil["185"]= "Tutorial/Overview.html@@@Tutorial Overview@@@This tutorial walks through creating and running a pipeline. You can download sample data so you can perform data preview, run the completed pipeline, and monitor the results...";
fil["186"]= "Tutorial/Tutorial-title.html@@@Tutorial@@@...";
