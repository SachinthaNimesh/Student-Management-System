import Sidebar from '../components/navigation/Sidebar';
import Titlebar from '../components/navigation/Titlebar';
import '../app/globals.css';
import SummaryCard from './(authenticated)/dashboard/components/SummaryCards';

export default function Page() {
  return (
    <div className='grid grid-cols-[226px_1fr] grid-rows-[auto_1fr] h-screen'>
      <div className='col-span-2'>
        <Titlebar /> 
      </div>
      <div>      
        <Sidebar />
      </div>
      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-gradient-to-r from-[#63A6D4] to-[#BBEFFF]'>
        <SummaryCard name={'Sampath Perera'} id={1} employer={'ABC Textiles'} workingHours={'09.00 - 16.00'} status={'Checked in'} statusEmoji={'🟡'}/>
        <SummaryCard name={'John Doe'} id={2} employer={'XYZ Corp'} workingHours={'08.00 - 17.00'} status={'Checked out'} statusEmoji={'🔴'}/>
        <SummaryCard name={'Jane Smith'} id={3} employer={'LMN Inc'} workingHours={'10.00 - 18.00'} status={'Checked in'} statusEmoji={'🟢'}/>
        <SummaryCard name={'Alice Johnson'} id={4} employer={'DEF Ltd'} workingHours={'09.00 - 17.00'} status={'Checked in'} statusEmoji={'🟢'}/>
        <SummaryCard name={'Bob Brown'} id={5} employer={'GHI Corp'} workingHours={'08.00 - 16.00'} status={'Checked out'} statusEmoji={'🔴'}/>
        <SummaryCard name={'Charlie Davis'} id={6} employer={'JKL Inc'} workingHours={'10.00 - 18.00'} status={'Checked in'} statusEmoji={'🟡'}/>
        <SummaryCard name={'Diana Evans'} id={7} employer={'MNO Ltd'} workingHours={'09.00 - 17.00'} status={'Checked out'} statusEmoji={'🔴'}/>
        <SummaryCard name={'Ethan Foster'} id={8} employer={'PQR Corp'} workingHours={'08.00 - 16.00'} status={'Checked in'} statusEmoji={'🟢'}/>
        <SummaryCard name={'Fiona Green'} id={9} employer={'STU Inc'} workingHours={'10.00 - 18.00'} status={'Checked in'} statusEmoji={'🟡'}/>
        <SummaryCard name={'George Harris'} id={10} employer={'VWX Ltd'} workingHours={'09.00 - 17.00'} status={'Checked out'} statusEmoji={'🔴'}/>
        <SummaryCard name={'Hannah Irving'} id={11} employer={'YZA Corp'} workingHours={'08.00 - 16.00'} status={'Checked in'} statusEmoji={'🟢'}/>
        <SummaryCard name={'Ian Johnson'} id={12} employer={'BCD Inc'} workingHours={'10.00 - 18.00'} status={'Checked in'} statusEmoji={'🟡'}/>
        <SummaryCard name={'Jackie King'} id={13} employer={'EFG Ltd'} workingHours={'09.00 - 17.00'} status={'Checked out'} statusEmoji={'🔴'}/>
        <SummaryCard name={'Kevin Lewis'} id={14} employer={'HIJ Corp'} workingHours={'08.00 - 16.00'} status={'Checked in'} statusEmoji={'🟢'}/>
        <SummaryCard name={'Laura Martinez'} id={15} employer={'KLM Inc'} workingHours={'10.00 - 18.00'} status={'Checked in'} statusEmoji={'🟡'}/>
      </div>
    </div>
  );
}