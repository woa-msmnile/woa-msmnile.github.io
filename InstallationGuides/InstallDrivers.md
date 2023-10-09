# Download and install drivers

## Preparation
- Download [DriverUpdater](https://github.com/WOA-Project/DriverUpdater/releases) by [WOA-Project](https://github.com/WOA-Project/)
  > Generally speaking please download the x64/x86 one, if **Your Computer** has more than one x86 CPU.

- Download Driver Pack
  > Just click the Download Button in the page.
  <img src="/InstallationGuides/Resources/InstallDrivers/HowToDownload1.png" width=40%/>
  - For Sm8150 Devices, the repo is [msmnile-Drivers](https://github.com/woa-msmnile/msmnile-Drivers)
  - For Sm7125 Devices, the repo is [Atoll-Drivers](https://github.com/woa-msmnile/Atoll-Drivers)
  - For others, please refer to [QC Silicons' Codename Reference Table](..\ReferenceTables\QCSiliconCodenameReferenceTable.md)  
    and donwload the one named xxx-Drivers.

- Download Device Specific Driver Pack
  > Just click the Download Zip Button to Download.
  <img src="/InstallationGuides/Resources/InstallDrivers/HowToDownload2.png" width=40%/>
  - For Xiaomi Pad 5, the repo is [Nabu](https://github.com/woa-msmnile/Nabu)
  - For Oneplus 7TP/7T, the repo is [Hotdog](https://github.com/woa-msmnile/Hotdog)
  - For others, please refer to [Devices' Codename Reference Table](..\ReferenceTables\DeviceCodenameReferenceTable.md)  
    and donwload the one named xxx.

- Let Your Device Enter [usb mass storage mode](.\EnterUMS.md).
  > Ideally situation is that you have applied windows to your disk just now and your phone is still in ums mode.


## Installation
  1. Unzip the .zip files you just donwloading into correct folders.
      - An example:
        + Extract Driver Pack into `D:\WOA\<silicon-codename>-Drivers\`
        + Extract DriverUpdater.exe to `D:\WOA\<silicon-codename>-Drivers\DriverUpdater.exe`
        + Extract Device Specific Driver Pack to `D:\WOA\<silicon-codename>-Drivers\components\QC8150\Device\<device-codename>\`

  2. Open a ternimal with admin permission, then change directory to `<silicon-codename>-Drivers\`.
      - An example in `cmd`:
        + `cd /d D:\WOA\<silicon-codename>-Drivers\`
      - An example in `powershell`:
        + `cd 'D:\WOA\<silicon-codename>-Drivers\'`

  3. Install drivers with `DriverUpdater.exe`
      - For details about how to use, please execute `DriverUpdater.exe --help`.
      - An example (assume the Windows partition on your phone assigned to `F:` on your computer):
        + `.\DriverUpdater.exe -p F: -d definitions\Desktop\ARM64\Internal\<device-codename>.txt -r .`
  
  4. Waiting for completion.
      - A screenshot after installing driver successfully on QRD778.
      <img src="/InstallationGuides/Resources/InstallDrivers/DriverUpdateSuccessfully.png"/>
  
  5. Eject disk in explorer, then you have successfully installed all the drivers!!


