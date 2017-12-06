//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.7.99
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace Umbraco.Web.PublishedContentModels
{
	/// <summary>Homepage</summary>
	[PublishedContentModel("homepage")]
	public partial class Homepage : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "homepage";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public Homepage(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<Homepage, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Business Hours
		///</summary>
		[ImplementPropertyType("businessHours")]
		public IEnumerable<Dexmoor.BusinessHours.Core.ViewModels.DaysOfBusinessViewModel> BusinessHours
		{
			get { return this.GetPropertyValue<IEnumerable<Dexmoor.BusinessHours.Core.ViewModels.DaysOfBusinessViewModel>>("businessHours"); }
		}

		///<summary>
		/// Special Business Hours
		///</summary>
		[ImplementPropertyType("specialBusinessHours")]
		public IEnumerable<Dexmoor.BusinessHours.Core.ViewModels.SpecialDaysOfBusinessViewModel> SpecialBusinessHours
		{
			get { return this.GetPropertyValue<IEnumerable<Dexmoor.BusinessHours.Core.ViewModels.SpecialDaysOfBusinessViewModel>>("specialBusinessHours"); }
		}
	}
}
